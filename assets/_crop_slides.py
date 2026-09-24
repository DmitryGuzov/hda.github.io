from pathlib import Path
from PIL import Image, ImageDraw

assets = Path(
    r"C:\Users\Dmytro Huzov\.cursor\projects\c-Repository-personal-flutter-vehicle-management\assets"
)
out = Path(r"c:\Repository\personal\flutter_vehicle_management\website\assets\slides")
out.mkdir(parents=True, exist_ok=True)

files = {
    "home": "c__Users_Dmytro_Huzov_AppData_Roaming_Cursor_User_workspaceStorage_f16dfc1fa3771dbcd6d547f2472d662e_images_image-2fce0a91-a872-4f23-829d-8c18a87005fe.png",
    "garage": "c__Users_Dmytro_Huzov_AppData_Roaming_Cursor_User_workspaceStorage_f16dfc1fa3771dbcd6d547f2472d662e_images_image-5881f672-a021-4e44-b4ec-71f7cbf9b152.png",
    "actions": "c__Users_Dmytro_Huzov_AppData_Roaming_Cursor_User_workspaceStorage_f16dfc1fa3771dbcd6d547f2472d662e_images_image-14208e90-c574-4c49-8b0c-da30799624d7.png",
    "map": "c__Users_Dmytro_Huzov_AppData_Roaming_Cursor_User_workspaceStorage_f16dfc1fa3771dbcd6d547f2472d662e_images_image-cb5d4150-a2ea-49cd-8347-e02a16dd16c5.png",
    "settings": "c__Users_Dmytro_Huzov_AppData_Roaming_Cursor_User_workspaceStorage_f16dfc1fa3771dbcd6d547f2472d662e_images_image-76d86bf0-f943-454e-ad77-064d86d30e0b.png",
}


def is_green(rgb):
    r, g, b = rgb[:3]
    return g > 90 and g > r + 15 and g >= b - 5


def green_frame(im):
    px = im.convert("RGB")
    w, h = px.size
    left_x, left_n = None, 0
    for x in range(0, w // 3):
        n = sum(1 for y in range(h) if is_green(px.getpixel((x, y))))
        if n > left_n:
            left_x, left_n = x, n
    right_x, right_n = None, 0
    for x in range(w - 1, w * 2 // 3, -1):
        n = sum(1 for y in range(h) if is_green(px.getpixel((x, y))))
        if n > right_n:
            right_x, right_n = x, n
    top_y, top_n = None, 0
    for y in range(0, h // 6):
        n = sum(1 for x in range(w) if is_green(px.getpixel((x, y))))
        if n > top_n:
            top_y, top_n = y, n
    bot_y, bot_n = None, 0
    for y in range(h - 1, h * 5 // 6, -1):
        n = sum(1 for x in range(w) if is_green(px.getpixel((x, y))))
        if n > bot_n:
            bot_y, bot_n = y, n
    if not all(v is not None for v in (left_x, right_x, top_y, bot_y)):
        return None
    if left_n < h * 0.45 or right_n < h * 0.45:
        return None
    if top_n < w * 0.35 or bot_n < w * 0.35:
        return None
    return (left_x + 2, top_y + 2, right_x, bot_y)


def bezel_frame(im):
    """Crop past gray bezel / black inner rim to the app surface."""
    px = im.convert("RGB")
    w, h = px.size

    def is_chrome(rgb):
        r, g, b = rgb
        spread = max(r, g, b) - min(r, g, b)
        avg = (r + g + b) / 3
        if spread < 10 and 15 <= avg <= 170:
            return True
        if 28 <= r <= 50 and 32 <= g <= 58 and 42 <= b <= 70 and abs(b - g) < 18:
            # outer page bg
            if spread < 22 and avg < 58:
                return True
        return False

    cy = h // 2
    cx = w // 2
    left = next((x for x in range(w) if not is_chrome(px.getpixel((x, cy)))), 14)
    right = next((x for x in range(w - 1, -1, -1) if not is_chrome(px.getpixel((x, cy)))), w - 14)
    top = next((y for y in range(h) if not is_chrome(px.getpixel((cx, y)))), 18)
    bot = next((y for y in range(h - 1, -1, -1) if not is_chrome(px.getpixel((cx, y)))), h - 20)
    return (left, top, right + 1, bot + 1)


def round_mask(im, radius=36):
    mask = Image.new("L", im.size, 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle((0, 0, im.size[0] - 1, im.size[1] - 1), radius=radius, fill=255)
    out_im = im.convert("RGBA")
    out_im.putalpha(mask)
    return out_im


for name, fname in files.items():
    im = Image.open(assets / fname).convert("RGBA")
    box = green_frame(im)
    src = "green"
    if box is None:
        box = bezel_frame(im)
        src = "bezel"
    crop = im.crop(box)
    crop = round_mask(crop, radius=max(28, crop.size[0] // 9))
    crop.save(out / f"{name}.png")
    print(name, src, im.size, "->", crop.size, box)
