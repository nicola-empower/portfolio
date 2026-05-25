import os

WORKSPACE_DIR = r"c:\Users\nicol\OneDrive\Desktop\digitalsolutions\portfolio"
PUBLIC_DIR = os.path.join(WORKSPACE_DIR, "public")

missing_images = [
    "/automation/ai-control-plane-hero.png",
    "/automation/invoice-automation-hero.png",
    "/automation/schematic-hero.png",
    "/designforge-ai/design-forge-thumbnail-33.png",
    "/empower-automation/empower_automation_infographic_1774881368798.png",
    "/lead-flow/leadflowthumbnail.png",
    "/logo.png",
    "/medi-sync/medISync-schematic.png",
    "/script-vault/scriptvaultthumbnail-new.png",
    "/smart-proposal-builder/proposalthumbnail-new.png",
    "/the-gym/gym-access-control.png",
    "/the-gym/gym-dashboard.png",
    "/the-gym/thegymthumnail-new.png",
    "/trade-pro/TradeProthumbnail-new.png",
    "/va-assist/vaassistthumbnail-new.png",
    "/vowsuite/vowsuite-client-dash.png",
    "/vowsuite/vowsuite-planner-dash.png",
    "/vowsuite/vowsuite-schematic.png",
    "/vowsuite/vowsuite-venue-dash.png",
    "/vowsuite/vowsuitethumbnail-new.png"
]

print("WebP counterparts check:")
print("=" * 100)
for img in missing_images:
    rel_path = img[1:].replace("/", os.sep) if img.startswith("/") else img.replace("/", os.sep)
    full_png = os.path.join(PUBLIC_DIR, rel_path)
    
    # Check webp
    webp_rel = os.path.splitext(rel_path)[0] + ".webp"
    full_webp = os.path.join(PUBLIC_DIR, webp_rel)
    
    png_exists = os.path.exists(full_png)
    webp_exists = os.path.exists(full_webp)
    
    # Let's also check if there's any file with the same base name but different extension
    dir_name = os.path.dirname(full_png)
    base_name = os.path.splitext(os.path.basename(full_png))[0]
    
    other_exts = []
    if os.path.exists(dir_name):
        for f in os.listdir(dir_name):
            if os.path.splitext(f)[0].lower() == base_name.lower() and f != os.path.basename(full_png):
                other_exts.append(f)
                
    print(f"Ref: {img}")
    print(f"  - PNG exists:  {png_exists}")
    print(f"  - WebP exists: {webp_exists} (Path: {webp_rel})")
    if other_exts:
        print(f"  - Alternatives in folder: {other_exts}")
    else:
        print(f"  - Alternatives in folder: None")
    
    # Let's print actual folder contents to see if maybe the files are named slightly differently
    if os.path.exists(dir_name):
        print(f"  - Actual folder contents: {os.listdir(dir_name)[:10]}")
    else:
        print(f"  - Folder does NOT exist!")
    print("-" * 100)
