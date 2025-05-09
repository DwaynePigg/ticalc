from PIL import Image

img = Image.open('charw.png').convert('RGBA')
img.putdata([(r, g, b, 0 if r and b and g else 255) for r, g, b, a in img.getdata()])
img.save('chara.png', 'PNG')
