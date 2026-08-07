#!/usr/bin/env python3
"""Download Pexels stock images and convert to WebP for K.H. Infinity."""

from __future__ import annotations

import shutil
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "images"

UA = "Mozilla/5.0 (compatible; KHI-ImageFetcher/1.0)"

# (url, output_path, description for credits)
DOWNLOADS: list[tuple[str, Path, str, str]] = [
    (
        "https://images.pexels.com/photos/4033323/pexels-photo-4033323.jpeg?auto=compress&cs=tinysrgb&w=1200",
        PUBLIC / "products" / "almonds.webp",
        "4033323",
        "Raw almond nuts in bowl — U.S. Almonds product",
    ),
    (
        "https://images.pexels.com/photos/37417610/pexels-photo-37417610.jpeg?auto=compress&cs=tinysrgb&w=1200",
        PUBLIC / "products" / "medjool-dates.webp",
        "37417610",
        "Fresh Medjool dates on plate — Medjool Dates product",
    ),
    (
        "https://images.pexels.com/photos/19730266/pexels-photo-19730266.jpeg?auto=compress&cs=tinysrgb&w=1200",
        PUBLIC / "products" / "soy-sauce.webp",
        "19730266",
        "Soy sauce bottles on kitchen counter — Soy Sauce & Condiments product",
    ),
    (
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1600",
        PUBLIC / "hubs" / "imports-hero.webp",
        "906494",
        "Stacked shipping containers at port — Import Operations hero",
    ),
    (
        "https://images.pexels.com/photos/6170405/pexels-photo-6170405.jpeg?auto=compress&cs=tinysrgb&w=1600",
        PUBLIC / "services" / "sme-import-hero.webp",
        "6170405",
        "Warehouse worker inspecting parcel shelves — SME Import Solutions hero",
    ),
    (
        "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1600",
        PUBLIC / "about" / "about-banner.webp",
        "262353",
        "Container cargo ship at sunset — About page hero & OG",
    ),
]

COPIES: list[tuple[Path, Path, str]] = [
    (
        PUBLIC / "potato-export" / "hero.webp",
        PUBLIC / "hubs" / "exports-hero.webp",
        "Existing KHI potato export hero — Export Operations (Bangladesh potato Gulf programme)",
    ),
    (
        PUBLIC / "blog" / "bangladesh-imports-2025.webp",
        PUBLIC / "blog" / "blog-cover.webp",
        "Existing trade editorial image — Blog index OG",
    ),
]


def fetch(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    tmp = dest.with_suffix(".jpg")
    tmp.write_bytes(data)
    img = Image.open(tmp)
    if img.mode not in ("RGB", "L"):
        img = img.convert("RGB")
    img.save(dest, "WEBP", quality=82, method=6)
    tmp.unlink(missing_ok=True)
    print(f"Saved {dest.relative_to(ROOT)}")


def copy(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dest)
    print(f"Copied {src.relative_to(ROOT)} -> {dest.relative_to(ROOT)}")


def main() -> None:
    credits_lines = [
        "# Image Credits",
        "",
        "Stock photos from [Pexels](https://www.pexels.com) (free license).",
        "Site-owned images are noted as existing assets.",
        "",
        "| File | Source | Subject |",
        "|------|--------|---------|",
    ]

    for url, dest, pexels_id, subject in DOWNLOADS:
        fetch(url, dest)
        credits_lines.append(
            f"| `{dest.relative_to(PUBLIC)}` | [Pexels {pexels_id}](https://www.pexels.com/photo/{pexels_id}/) | {subject} |"
        )

    for src, dest, subject in COPIES:
        copy(src, dest)
        credits_lines.append(
            f"| `{dest.relative_to(PUBLIC)}` | Site asset (from `{src.relative_to(PUBLIC)}`) | {subject} |"
        )

    credits_path = PUBLIC / "CREDITS.md"
    credits_path.write_text("\n".join(credits_lines) + "\n", encoding="utf-8")
    print(f"Wrote {credits_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
