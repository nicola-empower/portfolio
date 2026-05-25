import os

WORKSPACE_DIR = r"c:\Users\nicol\OneDrive\Desktop\digitalsolutions\portfolio"
PROJECTS_FILE = os.path.join(WORKSPACE_DIR, "data", "projects.ts")

targets = [
    "ai-control-plane-hero.png",
    "invoice-automation-hero.png",
    "schematic-hero.png",
    "design-forge-thumbnail-33.png",
    "leadflowthumbnail.png",
    "scriptvaultthumbnail-new.png",
    "proposalthumbnail-new.png",
    "thegymthumnail-new.png",
    "TradeProthumbnail-new.png",
    "vaassistthumbnail-new.png",
    "vowsuitethumbnail-new.png",
    "medISync-schematic.png"
]

with open(PROJECTS_FILE, "r", encoding="utf-8") as f:
    lines = f.readlines()

print("Found line numbers:")
print("=" * 60)
for target in targets:
    found = False
    for idx, line in enumerate(lines):
        if target in line:
            print(f"[+] {target} -> Line {idx + 1}: {line.strip()}")
            found = True
    if not found:
        print(f"[-] NOT FOUND: {target}")
print("=" * 60)
