import os
import re

WORKSPACE_DIR = r"c:\Users\nicol\OneDrive\Desktop\digitalsolutions\portfolio"
PUBLIC_DIR = os.path.join(WORKSPACE_DIR, "public")
DIRS_TO_SCAN = ["data", "components", "app"]

IMAGE_PATTERN = re.compile(r'["\'`](/[^"\'`]+\.(?:png|webp|jpg|jpeg|svg))["\'`]', re.IGNORECASE)

def find_referenced_images():
    referenced = {}
    
    for folder in DIRS_TO_SCAN:
        folder_path = os.path.join(WORKSPACE_DIR, folder)
        if not os.path.exists(folder_path):
            continue
            
        for root, _, files in os.walk(folder_path):
            for file in files:
                if not file.endswith((".ts", ".tsx", ".js", ".jsx")):
                    continue
                    
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                        
                    matches = IMAGE_PATTERN.findall(content)
                    for match in matches:
                        # Normalize path
                        clean_path = match.replace("/", os.sep)
                        # Remove leading slash/sep if present
                        if clean_path.startswith(os.sep):
                            clean_path = clean_path[1:]
                            
                        full_ref_path = os.path.join(PUBLIC_DIR, clean_path)
                        rel_file = os.path.relpath(file_path, WORKSPACE_DIR)
                        
                        if match not in referenced:
                            referenced[match] = {
                                "exists": os.path.exists(full_ref_path),
                                "full_path": full_ref_path,
                                "referenced_in": set()
                            }
                        referenced[match]["referenced_in"].add(rel_file)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
                    
    return referenced

if __name__ == "__main__":
    print("Auditing image assets referenced in codebase...")
    print("=" * 80)
    
    results = find_referenced_images()
    
    missing = {k: v for k, v in results.items() if not v["exists"]}
    found = {k: v for k, v in results.items() if v["exists"]}
    
    print(f"Total Unique Images Referenced: {len(results)}")
    print(f"Found:                          {len(found)}")
    print(f"Missing:                        {len(missing)}")
    print("-" * 80)
    
    if missing:
        print("MISSING IMAGES:")
        # Group missing images by directory to make it easier to digest
        for img, data in sorted(missing.items()):
            ref_str = ", ".join(sorted(list(data["referenced_in"])))
            print(f"[-] {img} (referenced in: {ref_str})")
    else:
        print("[+] No missing images found!")
        
    print("=" * 80)
