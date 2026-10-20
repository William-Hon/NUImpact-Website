import os
import pandas as pd
import re
from supabase import create_client
from dotenv import load_dotenv
from tkinter import Tk
from tkinter.filedialog import askopenfilename


# Load environment variables
env_path = os.path.join(os.path.dirname(__file__), "..", ".env")
load_dotenv(env_path)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SECRET_KEY")
BUCKET = "member-photos"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


# ---------- FILE PICKER ----------
root = Tk()
root.withdraw()
root.attributes("-topmost", True)

file_path = askopenfilename(
    title="Select the member spreadsheet or CSV file",
    filetypes=[
        ("All Supported Files", "*.xlsx *.xls *.csv"),
        ("CSV files", "*.csv"),
        ("Excel files", "*.xlsx *.xls"),
        ("All files", "*.*")
    ]
)

if not file_path:
    print("No file selected. Exiting.")
    exit()

print(f"Loading spreadsheet: {file_path}")

if file_path.lower().endswith(".csv"):
    df = pd.read_csv(file_path)
else:
    df = pd.read_excel(file_path)


# ---------- HELPER FUNCTIONS ----------

# Convert Excel/CSV NaN → None
def safe(val):
    if pd.isna(val):
        return None
    return str(val).strip()


# Normalize names for safe filenames
def normalize(name):
    name = name.lower()
    name = re.sub(r"\s+", "-", name)
    name = re.sub(r"[^a-z0-9\-]", "", name)
    return name


# Flexible column resolution
def find_col_name(df, primary_names, fallback_substr=None):
    col_map = {str(c).strip().lower(): c for c in df.columns}
    for name in primary_names:
        if name.lower() in col_map:
            return col_map[name.lower()]
    if fallback_substr:
        for c_lower, orig in col_map.items():
            if fallback_substr.lower() in c_lower:
                return orig
    return None


name_col = find_col_name(df, ["Name"], "name")
team_col = find_col_name(df, [
    "Team (leadership, fund, programming, venture)",
    "Team (leadership, fund, programming)",
    "Team"
], "team")
major_col = find_col_name(df, ["Major(s)/Minor(s)", "Major"], "major")
position_col = find_col_name(df, ["Position", "Role"], "position")
experience_col = (
    find_col_name(df, ["Previous Co-ops/Internships", "Work Experience", "Experience"], "co-op")
    or find_col_name(df, [], "internship")
    or find_col_name(df, [], "experience")
)
linkedin_col = find_col_name(df, ["LinkedIn", "LinkedIn URL"], "linkedin")

VALID_TEAM_MAP = {
    "leadership": "leadership",
    "lead": "leadership",
    "fund": "fund",
    "funds": "fund",
    "programming": "programming",
    "program": "programming",
    "venture": "venture",
    "ventures": "venture",
    "venture advisory": "venture"
}


# ---------- DATA PROCESSING ----------
print(f"Fetching uploaded files from '{BUCKET}' bucket...")
bucket_files = supabase.storage.from_(BUCKET).list()
file_map = {}
for f in bucket_files:
    fname = f.get("name", "")
    if fname and "." in fname:
        # e.g. 'Acker_Natalie.jpeg' -> 'ackernatalie'
        cl_name = re.sub(r"[^a-z0-9]", "", fname.rsplit(".", 1)[0].lower())
        file_map[cl_name] = fname

members_dict = {}

for _, row in df.iterrows():

    # Required columns
    name = safe(row.get(name_col)) if name_col else None
    team_raw = safe(row.get(team_col)) if team_col else None

    # Skip rows missing required fields
    if not name or not team_raw:
        continue

    name = name.strip()

    # Split name for image filename
    parts = name.split()

    first = normalize(parts[0])
    last = normalize(parts[-1])
    
    # Try looking up LastFirst or FirstLast combinations
    match1 = re.sub(r"[^a-z0-9]", "", f"{last}{first}")
    match2 = re.sub(r"[^a-z0-9]", "", f"{first}{last}")
    
    filename = None
    if match1 in file_map:
        filename = file_map[match1]
    elif match2 in file_map:
        filename = file_map[match2]
        
    if filename:
        image_url = f"{SUPABASE_URL}/storage/v1/object/public/{BUCKET}/{filename}"
    else:
        # Fallback to placeholder if no photo exists
        image_url = "/assets/images/team-members/member-pic-placeholder.png"

    # Convert comma-separated teams → normalized array
    raw_teams = [t.strip().lower() for t in team_raw.split(",") if t.strip()]
    teams = [VALID_TEAM_MAP.get(t, t) for t in raw_teams]

    if name in members_dict:
        # Avoid duplicate rows, combine teams if person appears twice
        existing_teams = members_dict[name]["team"]
        members_dict[name]["team"] = list(set(existing_teams + teams))
    else:
        member = {
            "name": name,
            "team": teams,
            "major": safe(row.get(major_col)) if major_col else None,
            "position": safe(row.get(position_col)) if position_col else None,
            "work_experience": safe(row.get(experience_col)) if experience_col else None,
            "linkedin_url": safe(row.get(linkedin_col)) if linkedin_col else None,
            "image_url": image_url
        }

        members_dict[name] = member

members = list(members_dict.values())


if not members:
    print("No valid members found in Excel.")
    exit()


# Upsert using name conflict rule
response = supabase.table("members").upsert(
    members,
    on_conflict="name"
).execute()

print(f"{len(members)} members synced successfully.")