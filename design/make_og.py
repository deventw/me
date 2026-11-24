"""分享預覽圖 1200×630（public/og.png）。

用法（喺 repo 根目錄）：python3 -I design/make_og.py
風格跟網站：米白底、墨黑大字、暖橙強調色；右下放三個 App icon。
字型：design/fonts（Inter Bold、JetBrains Mono，皆為 OFL）。
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "design" / "fonts"

W, H = 1200, 630
BG = "#FCFBFA"
INK = "#0A0B0C"
MUTED = "#737373"
BRAND = "#DA4A16"
RULE = "#E5E5E5"

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

bold = lambda s: ImageFont.truetype(str(FONTS / "Inter-Bold.ttf"), s)
mono = lambda s: ImageFont.truetype(str(FONTS / "JetBrainsMono-Regular.ttf"), s)

X = 80
d.text((X, 78), "Hi, I'm Deven.", font=mono(30), fill=BRAND)
d.text((X, 140), "I build web and mobile", font=bold(78), fill=INK)
d.text((X, 236), "products, end to end.", font=bold(78), fill=MUTED)

d.line((X, 430, W - X, 430), fill=RULE, width=2)
d.text((X, 470), "Deven Kwong", font=bold(34), fill=INK)
d.text((X, 520), "Full-stack developer · Hong Kong", font=mono(24), fill=MUTED)

# 右下：deven.tw + 三個 App icon
url_font = mono(26)
d.text((W - X - d.textlength("deven.tw", font=url_font), 470), "deven.tw", font=url_font, fill=BRAND)


def rounded(im, r):
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, im.width - 1, im.height - 1], radius=r, fill=255)
    out = Image.new("RGBA", im.size, (0, 0, 0, 0))
    out.paste(im, (0, 0), mask)
    return out


size, gap = 56, 14
icons = ["busroo", "yohaku", "subscription-bird"]
x = W - X - len(icons) * size - (len(icons) - 1) * gap
for name in icons:
    icon = Image.open(ROOT / "public" / "apps" / f"{name}.png").convert("RGB").resize((size, size), Image.LANCZOS)
    icon = rounded(icon, 13)
    # 淡色外框：米白嘅 Yohaku icon 先唔會同背景溶埋一齊（同網站 ring-1 一樣）
    d.rounded_rectangle((x - 1, 514, x + size, 515 + size), radius=14, outline=RULE, width=2)
    img.paste(icon, (x, 515), icon)
    x += size + gap

img.save(ROOT / "public" / "og.png", optimize=True)
print("ok", img.size)
