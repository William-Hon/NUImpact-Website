import os
from supabase import create_client
from dotenv import load_dotenv

# Load environment variables
env_path = os.path.join(os.path.dirname(__file__), "..", ".env")
load_dotenv(env_path)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_SECRET_KEY")
BUCKET = "member-photos"

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

downloads_dir = os.path.join(os.path.expanduser("~"), "Downloads")
output_dir = os.path.join(downloads_dir, "webp_outputs")

print(f"Fetching existing files from '{BUCKET}' bucket...")
bucket_files = supabase.storage.from_(BUCKET).list()

# 1. Delete old jpg/png files
files_to_remove = []
for f in bucket_files:
    fname = f.get("name", "")
    if fname.lower().endswith((".jpg", ".jpeg", ".png")):
        files_to_remove.append(fname)

if files_to_remove:
    print(f"Deleting {len(files_to_remove)} old jpeg/png files from Supabase...")
    # Supabase expects a list of paths
    supabase.storage.from_(BUCKET).remove(files_to_remove)

# 2. Upload the new webp files
print("Uploading new .webp files...")
for filename in os.listdir(output_dir):
    if filename.endswith(".webp"):
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, "rb") as f:
            print(f"Uploading {filename}...")
            try:
                supabase.storage.from_(BUCKET).upload(
                    file=filepath, 
                    path=filename, 
                    file_options={"content-type": "image/webp"}
                )
            except Exception as e:
                # If file already exists, it throws an error, so we try update
                try:
                    supabase.storage.from_(BUCKET).update(
                        file=filepath, 
                        path=filename, 
                        file_options={"content-type": "image/webp"}
                    )
                except Exception as eval_e:
                    print(f"Error uploading {filename}: {eval_e}")

print("Upload complete!")
