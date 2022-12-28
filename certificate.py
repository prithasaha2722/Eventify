from PIL import Image,ImageDraw,ImageFont
FONT_FILE = ImageFont.truetype("arial.ttf", 50)
FONT_FILE_o = ImageFont.truetype("arial.ttf", 30)
FONT_COLOR = "#000000"
t1 = Image.open('cert1.png')
WIDTH, HEIGHT = t1.size
def make_certificates(name,event,date,venue):
    image_source = Image.open('cert1.png')
    draw = ImageDraw.Draw(image_source)
    name_width, name_height = draw.textsize(name, font=FONT_FILE)
    draw.text((1150,609), name, fill=FONT_COLOR, font=FONT_FILE)
    event_width, event_height = draw.textsize(event, font=FONT_FILE_o)
    draw.text((1367,712), event, fill=FONT_COLOR, font=FONT_FILE_o)
    date_width, date_height = draw.textsize(date, font=FONT_FILE_o)
    draw.text((1527,844), date, fill=FONT_COLOR, font=FONT_FILE_o)
    venue_width, venue_height = draw.textsize(venue, font=FONT_FILE_o)
    draw.text((882,838), venue, fill=FONT_COLOR, font=FONT_FILE_o)
    image_source.save("./out/" + name +".png")
    print('Saving Certificate of:', name)

if __name__ == "__main__":
    names = ["Soham Chakraborty", "Kaustav Giri", "Pritha Saha"]
    event = "Devfest 2023"
    date = "28.12.2022"
    venue = "Novotel"
    for name in names:
        make_certificates(name,event,date,venue)
    print(len(names), "certificates done.")