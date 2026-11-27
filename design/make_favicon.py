"""Favicon：暖橙圓角方塊 + 白色「D」（JetBrains Mono ExtraBold）。

用法（喺 repo 根目錄）：python3 -I design/make_favicon.py
輸出到 public/：
  favicon.svg            向量版（現代瀏覽器用，最清楚）
  favicon.ico            16 / 32 / 48，舊瀏覽器同 /favicon.ico 預設請求
  favicon-32x32.png      PNG 後備
  favicon-16x16.png
  apple-touch-icon.png   180×180，iPhone「加入主畫面」用（滿版，iOS 自己會切圓角）
"""
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
FONT = ROOT / "design" / "fonts" / "JetBrainsMono-ExtraBold.ttf"

BRAND = "#DA4A16"  # 網站強調色 hsl(16 82% 47%)
FG = "#FFFFFF"
SIZE = 512  # 母版尺寸（px），其他尺寸由佢縮細
RADIUS = 0.22  # 圓角佔邊長比例
LETTER_H = 0.56  # 「D」高度佔邊長比例

# ---------- 「D」嘅外框路徑（字型單位） ----------
font = TTFont(FONT)
gs = font.getGlyphSet()
glyph = gs[font.getBestCmap()[ord("D")]]
bp = BoundsPen(gs)
glyph.draw(bp)
xmin, ymin, xmax, ymax = bp.bounds
scale = SIZE * LETTER_H / (ymax - ymin)
# 置中：字型座標 y 向上，SVG y 向下
tx = SIZE / 2 - (xmin + xmax) / 2 * scale
ty = SIZE / 2 + (ymin + ymax) / 2 * scale

pen = SVGPathPen(gs)
glyph.draw(pen)
d = pen.getCommands()

svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SIZE} {SIZE}">'
    f'<rect width="{SIZE}" height="{SIZE}" rx="{SIZE * RADIUS:.0f}" fill="{BRAND}"/>'
    f'<path transform="matrix({scale:.5f} 0 0 {-scale:.5f} {tx:.2f} {ty:.2f})" fill="{FG}" d="{d}"/>'
    "</svg>\n"
)
(PUBLIC / "favicon.svg").write_text(svg)


# ---------- 點陣版：用同一條路徑喺 4 倍尺寸畫，再縮細做抗鋸齒 ----------
def render(px: int, rounded: bool) -> Image.Image:
    big = px * 4
    k = big / SIZE
    img = Image.new("RGBA", (big, big), (0, 0, 0, 0))
    dr = ImageDraw.Draw(img)
    if rounded:
        dr.rounded_rectangle([0, 0, big - 1, big - 1], radius=big * RADIUS, fill=BRAND)
    else:
        dr.rectangle([0, 0, big, big], fill=BRAND)

    # 用 fontTools 將字形拆成多邊形（曲線取樣），PIL 畫出嚟
    from fontTools.pens.basePen import BasePen

    polys: list[list[tuple[float, float]]] = []

    class PolyPen(BasePen):
        def _moveTo(self, p):
            polys.append([p])

        def _lineTo(self, p):
            polys[-1].append(p)

        def _curveToOne(self, p1, p2, p3):
            (x0, y0) = polys[-1][-1]
            for i in range(1, 17):
                t = i / 16
                mt = 1 - t
                x = mt**3 * x0 + 3 * mt**2 * t * p1[0] + 3 * mt * t**2 * p2[0] + t**3 * p3[0]
                y = mt**3 * y0 + 3 * mt**2 * t * p1[1] + 3 * mt * t**2 * p2[1] + t**3 * p3[1]
                polys[-1].append((x, y))

        def _closePath(self):
            pass

    glyph.draw(PolyPen(gs))
    # 外輪廓填白，內輪廓（D 中間嘅洞）用底色挖返出嚟：分開畫，先畫面積大嘅
    def area(poly):
        return abs(sum(x1 * y2 - x2 * y1 for (x1, y1), (x2, y2) in zip(poly, poly[1:] + poly[:1]))) / 2

    for i, poly in enumerate(sorted(polys, key=area, reverse=True)):
        pts = [((tx + x * scale) * k, (ty - y * scale) * k) for x, y in poly]
        dr.polygon(pts, fill=FG if i == 0 else BRAND)
    return img.resize((px, px), Image.LANCZOS)


render(180, rounded=False).convert("RGB").save(PUBLIC / "apple-touch-icon.png", optimize=True)
render(32, rounded=True).save(PUBLIC / "favicon-32x32.png", optimize=True)
render(16, rounded=True).save(PUBLIC / "favicon-16x16.png", optimize=True)
render(256, rounded=True).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
render(512, rounded=True).save(ROOT / "design" / "favicon-preview.png")
print("ok")
