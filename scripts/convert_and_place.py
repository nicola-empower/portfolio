import os
import sys
from PIL import Image

WORKSPACE_DIR = r"c:\Users\nicol\OneDrive\Desktop\digitalsolutions\portfolio"
PUBLIC_DIR = os.path.join(WORKSPACE_DIR, "public")

def process_image(src_path, dest_rel_path):
    if not os.path.exists(src_path):
        print(f"[-] Source file does not exist: {src_path}")
        sys.exit(1)
        
    dest_path = os.path.join(PUBLIC_DIR, dest_rel_path)
    
    # Ensure destination directory exists
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    
    try:
        with Image.open(src_path) as img:
            # Check dimensions, if huge we can resize, but for mockups we can keep them crisp
            w, h = img.size
            if w > 1920:
                new_h = int(h * (1920 / w))
                img = img.resize((1920, new_h), Image.Resampling.LANCZOS)
                print(f"[i] Resizing from {w}x{h} to 1920x{new_h}")
                
            img.save(dest_path, "WEBP", quality=90, optimize=True)
            
        print(f"[+] Successfully converted and placed: {dest_rel_path}")
        print(f"    Saved to: {dest_path}")
    except Exception as e:
        print(f"[!] Error processing {src_path} -> {dest_rel_path}: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python convert_and_place.py <src_path> <dest_rel_path>")
        sys.exit(1)
        
    process_image(sys.argv[1], sys.argv[2])
