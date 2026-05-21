import os
from PIL import Image

PUBLIC_DIR = r"c:\Users\nicol\OneDrive\Desktop\digitalsolutions\portfolio\public"

# Format: (rel_path, max_width)
TARGET_IMAGES = [
    # Core Assets
    ("logo.png", 300),
    ("smefooter.png", 500),
    ("hero-falkirk.png", 1920),
    ("nicola_professional.png", 1000),
    
    # Thumbnails
    (os.path.join("images", "blog", "sovereignty.png"), 800),
    (os.path.join("the-salon", "thesalon-new.png"), 800),
    (os.path.join("the-gym", "thegymthumnail-new.png"), 800),
    (os.path.join("script-vault", "scriptvaultthumbnail-new.png"), 800),
    (os.path.join("designforge-ai", "design-forge-thumbnail-33.png"), 800),
    (os.path.join("reclaim", "reclaimthumbnail-new.png"), 800),
    (os.path.join("trade-pro", "TradeProthumbnail-new.png"), 800),
    (os.path.join("ops-command", "opscommandthumbnail-new.png"), 800),
    (os.path.join("automation", "schematic-hero.png"), 800),
    (os.path.join("automation", "invoice-automation-hero.png"), 800),
    (os.path.join("automation", "ai-control-plane-hero.png"), 800),
    (os.path.join("vowsuite", "vowsuitethumbnail-new.png"), 800),
    (os.path.join("lead-flow", "leadflowthumbnail.png"), 800),
    (os.path.join("smart-proposal-builder", "proposalthumbnail-new.png"), 800),
    (os.path.join("empower-automation", "empowerautomationthumbnail-new.png"), 800),
    (os.path.join("empower-digital", "empowerdigitalsolutionsthumbnail-new.png"), 800),
    (os.path.join("empower-va", "empowervaservicesthumbnail-new.png"), 800),
    (os.path.join("va-assist", "vaassistthumbnail-new.png"), 800),
]

def optimize_image(rel_path, max_width, quality=85):
    src_path = os.path.join(PUBLIC_DIR, rel_path)
    
    if not os.path.exists(src_path):
        print(f"[-] Source file does not exist: {src_path}")
        return
        
    dest_path = os.path.splitext(src_path)[0] + ".webp"
    
    orig_size = os.path.getsize(src_path)
    
    try:
        with Image.open(src_path) as img:
            # Check aspect ratio & resize
            w, h = img.size
            if w > max_width:
                new_h = int(h * (max_width / w))
                img = img.resize((max_width, new_h), Image.Resampling.LANCZOS)
                print(f"[i] Resizing {rel_path} from {w}x{h} to {max_width}x{new_h}")
            else:
                print(f"[i] Keeping original dimensions for {rel_path} ({w}x{h})")
                
            # Convert RGBA to RGB if saving to WebP without transparency issues
            if img.mode in ('RGBA', 'LA') and dest_path.endswith('.webp'):
                # Pillow handles RGBA perfectly for WebP, so we can keep transparency!
                pass
                
            img.save(dest_path, "WEBP", quality=quality, optimize=True)
            
        new_size = os.path.getsize(dest_path)
        saving = (orig_size - new_size) / orig_size * 100
        print(f"[+] Optimized: {rel_path}")
        print(f"    Original Size: {orig_size / 1024:.2f} KB")
        print(f"    WebP Size:     {new_size / 1024:.2f} KB")
        print(f"    Savings:       {saving:.2f}%")
        
        # Verify and then delete original heavy png file
        if new_size > 0:
            os.remove(src_path)
            print(f"    [Deleted original unoptimized PNG: {rel_path}]")
            
    except Exception as e:
        print(f"[!] Error processing {rel_path}: {e}")

if __name__ == "__main__":
    print("Starting Website Carbon Image Footprint Optimization...")
    print("=" * 60)
    for rel_path, max_width in TARGET_IMAGES:
        optimize_image(rel_path, max_width)
        print("-" * 60)
    print("Optimization Complete!")
