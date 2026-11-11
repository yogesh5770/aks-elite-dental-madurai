from PIL import Image
import os

base = r'C:\Users\yoges\.gemini\antigravity-ide\brain\d326bbd2-7507-403f-a2fc-0e928e14e332\.user_uploaded'
dest = r'C:\Users\yoges\.gemini\antigravity-ide\scratch\aks-elite-dental-madurai\public\real-cases'
os.makedirs(dest, exist_ok=True)

cases = [
    {
        'file': 'media_1791563532437.jpg',
        'prefix': 'ortho_ectopic_canine',
        'top_box': (18, 18, 848, 432),
        'bot_box': (18, 448, 848, 848),
        'full_box': (18, 18, 848, 848)
    },
    {
        'file': 'media_1791563565738.jpg',
        'prefix': 'ortho_lower_crowding',
        'top_box': (18, 18, 848, 432),
        'bot_box': (18, 448, 848, 848),
        'full_box': (18, 18, 848, 848)
    },
    {
        'file': 'media_1791563542930.png',
        'prefix': 'scaling_tobacco_stains',
        'top_box': (30, 30, 840, 420),
        'bot_box': (30, 449, 840, 840),
        'full_box': (30, 30, 840, 840)
    },
    {
        'file': 'media_1791563549982.jpg',
        'prefix': 'ortho_bite_correction',
        'top_box': (18, 18, 848, 432),
        'bot_box': (18, 448, 848, 848),
        'full_box': (18, 18, 848, 848)
    },
    {
        'file': 'media_1791563586803.png',
        'prefix': 'cosmetic_anterior_restoration',
        'top_box': (30, 30, 840, 420),
        'bot_box': (30, 449, 840, 840),
        'full_box': (30, 30, 840, 840)
    }
]

for c in cases:
    src_img = Image.open(os.path.join(base, c['file'])).convert('RGB')
    
    top = src_img.crop(c['top_box'])
    bot = src_img.crop(c['bot_box'])
    full = src_img.crop(c['full_box'])
    
    # Both top and bot should have identical dimensions for slider (830 x 414)
    target_w, target_h = 830, 414
    top_resized = top.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bot_resized = bot.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    before_p = os.path.join(dest, f"{c['prefix']}_before.webp")
    after_p = os.path.join(dest, f"{c['prefix']}_after.webp")
    full_p = os.path.join(dest, f"{c['prefix']}_full.webp")
    
    top_resized.save(before_p, 'WEBP', quality=92, method=6)
    bot_resized.save(after_p, 'WEBP', quality=92, method=6)
    full.save(full_p, 'WEBP', quality=92, method=6)
    
    print(f"Created {c['prefix']}: before={os.path.getsize(before_p)}B, after={os.path.getsize(after_p)}B, full={os.path.getsize(full_p)}B")
