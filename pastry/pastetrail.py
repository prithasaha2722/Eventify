from PIL import Image, ImageDraw
#insert_image = Image.open("a2.png").convert("RGBA")
insert_image = Image.open("a2.png")
#bw_image = insert_image.convert("1")
#threshold = 128
#table = [0 if i < threshold else 1 for i in range(256)]
#signature = bw_image.point(table, "1")
#insert_image=signature
#main_image = Image.open("a1.png").convert("RGBA")
main_image = Image.open("a1.png")
insert_image = insert_image.resize((180,70))
#result_image = Image.new("RGBA", main_image.size)
#result_image = Image.new(main_image.size)
#draw = ImageDraw.Draw(result_image)
main_image.paste(insert_image, (483,1080))
#draw.bitmap((810, 50), insert_image)
main_image.show("result.png")