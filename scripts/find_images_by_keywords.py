import os

WORKSPACE_DIR = r"c:\Users\nicol\OneDrive\Desktop\digitalsolutions\portfolio"
PUBLIC_DIR = os.path.join(WORKSPACE_DIR, "public")

print("Searching for files containing 'infographic' or 'schematic' in public/...")
print("=" * 100)
for root, dirs, files in os.walk(PUBLIC_DIR):
    for file in files:
        if "infographic" in file.lower() or "schematic" in file.lower():
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, PUBLIC_DIR)
            print(f"[+] Found: /{rel_path.replace(os.sep, '/')}")
print("=" * 100)
