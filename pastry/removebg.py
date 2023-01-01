from PIL import Image
image = Image.open("a2.png")
bw_image = image.convert("1")
threshold = 128
table = [0 if i < threshold else 1 for i in range(256)]
signature = bw_image.point(table, "1")
signature.show("signature_bw.png")
