from PIL import Image

def make_white_transparent(input_path, output_path):
    # Open the image and ensure it has an alpha channel
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Check for pure white
        if item[0] == 255 and item[1] == 255 and item[2] == 255:
            # Set alpha to 0 (fully transparent)
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    # Apply the modified data and save the result
    img.putdata(new_data)
    img.save(output_path, "PNG")

make_white_transparent("char.png", "chara.png")
