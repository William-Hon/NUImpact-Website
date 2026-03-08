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
    title="Select the member Excel sheet",
    filetypes=[("Excel files", "*.xlsx")]
)

if not file_path:
    print("No file selected. Exiting.")
    exit()

print(f"Loading spreadsheet: {file_path}")

df = pd.read_excel(file_path)


# ---------- HELPER FUNCTIONS ----------

# Convert Excel NaN → None
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
    name = safe(row.get("Name"))
    team_raw = safe(row.get("Team (leadership, fund, programming)"))

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

    # Convert comma-separated teams → array
    teams = [t.strip().lower() for t in team_raw.split(",")]

    if name in members_dict:
        # Avoid duplicate rows, combine teams if person appears twice
        existing_teams = members_dict[name]["team"]
        members_dict[name]["team"] = list(set(existing_teams + teams))
    else:
        member = {
            "name": name,
            "team": teams,
            "major": safe(row.get("Major(s)/Minor(s)")),
            "position": safe(row.get("Position")),
            "work_experience": safe(row.get("Previous Co-ops/Internships")),
            "linkedin_url": safe(row.get("LinkedIn")),
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