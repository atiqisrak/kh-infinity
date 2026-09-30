"""Crop the v3 landing-page photos out of the reference images in /assets.

Only regions without third-party UI, text or logos are kept. Outputs go to
public/images/v3/ as WebP. Re-run after replacing a reference image.
"""

import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets"
OUT = ROOT / "public" / "images" / "v3"

# name: (source file, crop box (left, top, right, bottom) or None, max width)
JOBS = {
    # Head-on aerial container ship (portrait: the hero uses tall panels)
    "hero-ship-tall": ("ref (13).jpg", (592, 1250, 2992, 4650), 1600),
    # Right half of the Hydraoo shot (left half carries their headline/UI)
    "ship-aerial": ("ref (4).jpg", (1010, 130, 2048, 1280), 1038),
    # Orange containers, low angle
    "containers-orange": ("ref (25).jpg", None, 736),
    # White/orange truck on an empty apron
    "truck-apron": ("ref (30).jpg", None, 928),
    # LNG tanker at sunset (left side of the source has a UI card)
    "tanker-sunset": ("ref (5).png", (700, 180, 1536, 1024), 836),
    # Sea / road / air aerial triptych
    "modes-triptych": ("ref (29).jpg", None, 736),
    # Container ship, open sea, soft sky
    "ship-open-sea": ("ref (14).jpg", None, 1200),
    # Truck convoy on a forest road beside a container ship (Marks Log logo/text cropped off)
    "road-and-sea": ("ref (10).png", (0, 980, 2160, 2380), 2160),
}


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    # Optional names on the command line rebuild only those images
    only = set(sys.argv[1:])
    for name, (src, box, max_w) in JOBS.items():
        if only and name not in only:
            continue
        im = Image.open(SRC / src).convert("RGB")
        if box:
            im = im.crop(box)
        if im.width > max_w:
            im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
        dest = OUT / f"{name}.webp"
        im.save(dest, "WEBP", quality=80, method=6)
        print(f"{dest.relative_to(ROOT)}  {im.width}x{im.height}  {dest.stat().st_size // 1024}KB")


if __name__ == "__main__":
    main()
