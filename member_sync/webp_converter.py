from PIL import Image, ImageOps
import os

# Input folder (change this)
input_dir = "../public/assets/NUImpact Member Headshots-20260319T010040Z-3-001/NUImpact Member Headshots"      # folder with jpg/png

# Get Downloads folder path
downloads_dir = os.path.join(os.path.expanduser("~"), "Downloads")
output_dir = os.path.join(downloads_dir, "webp_outputs")

os.makedirs(output_dir, exist_ok=True)

for filename in os.listdir(input_dir):
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, os.path.splitext(filename)[0] + ".webp")

        with Image.open(input_path) as img:
            img = ImageOps.exif_transpose(img)  # applies rotation from EXIF metadata
            img = img.convert("RGB")
            img.save(output_path, "webp", quality=65, method=6)  # Maximize compression

        print(f"Converted: {filename} → {output_path}")