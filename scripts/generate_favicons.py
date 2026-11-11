import os
import base64
from PIL import Image, ImageDraw

base_dir = r"c:\Users\yoges\.gemini\antigravity-ide\scratch\aks-elite-dental-madurai\public"
logo_path = os.path.join(base_dir, "aks_official_logo.png")

logo = Image.open(logo_path).convert("RGBA")
bbox = logo.getbbox()
logo_cropped = logo.crop(bbox)

def make_icon(size, radius_ratio=0.22, padding_ratio=0.12):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    r = int(size * radius_ratio)
    # Background: Signature dark emerald #0B3326 with emerald border
    border_w = max(1, int(size * 0.03))
    draw.rounded_rectangle(
        [0, 0, size - 1, size - 1],
        radius=r,
        fill=(9, 43, 32, 255),
        outline=(16, 185, 129, 200),
        width=border_w
    )
    
    pad = int(size * padding_ratio)
    avail_w = size - 2 * pad
    avail_h = size - 2 * pad
    
    lw, lh = logo_cropped.size
    scale = min(avail_w / lw, avail_h / lh)
    nw, nh = int(lw * scale), int(lh * scale)
    logo_resized = logo_cropped.resize((nw, nh), Image.Resampling.LANCZOS)
    
    px = (size - nw) // 2
    py = (size - nh) // 2
    img.paste(logo_resized, (px, py), logo_resized)
    return img

icon16 = make_icon(16)
icon32 = make_icon(32)
icon48 = make_icon(48)
icon180 = make_icon(180)
icon512 = make_icon(512)

icon16.save(os.path.join(base_dir, "favicon-16x16.png"))
icon32.save(os.path.join(base_dir, "favicon-32x32.png"))
icon180.save(os.path.join(base_dir, "apple-touch-icon.png"))
icon512.save(os.path.join(base_dir, "icon-512.png"))

# Save ICO
icon32.save(os.path.join(base_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

# Base64 for SVG
import io
buffer = io.BytesIO()
icon512.save(buffer, format="PNG")
b64 = base64.b64encode(buffer.getvalue()).decode("utf-8")

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <image href="data:image/png;base64,{b64}" x="0" y="0" width="512" height="512" />
</svg>"""

with open(os.path.join(base_dir, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(svg_content)

print("Favicon assets created successfully!")

