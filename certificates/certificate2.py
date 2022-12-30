from PIL import Image,ImageDraw,ImageFont
#FONT_FILE = ImageFont.truetype("arial.ttf", 50)
#FONT_FILE_o = ImageFont.truetype("arial.ttf", 30)
FONT_COLOR = "#000000"
t1 = Image.open('cert/cert2.png')
WIDTH, HEIGHT = t1.size
def make_certificates2(name,event,date,venue,desig,design,n1,n2):
    image_source = Image.open('cert/cert2.png')
    draw = ImageDraw.Draw(image_source)
    name_width, name_height = draw.textsize(name)
    draw.text((720,546), name, fill=FONT_COLOR,font=ImageFont.truetype("arial.ttf",90))
    event_width, event_height = draw.textsize(event)
    draw.text((406,870), event, fill=FONT_COLOR,font=ImageFont.truetype("arial.ttf",40))
    date_width, date_height = draw.textsize(date)
    draw.text((1212,869), date, fill=FONT_COLOR,font=ImageFont.truetype("arial.ttf",40))
    venue_width, venue_height = draw.textsize(venue)
    draw.text((739,867), venue, fill=FONT_COLOR,font=ImageFont.truetype("arial.ttf",40))

    desig_width, desig_height = draw.textsize(desig)
    draw.text((520,1191), desig, fill=FONT_COLOR,font=ImageFont.truetype("arial.ttf",40))
    design_width, design_height = draw.textsize(design)
    draw.text((1322,1197), design, fill=FONT_COLOR,font=ImageFont.truetype("arial.ttf",40))
    n1_width, n1_height = draw.textsize(n1)
    draw.text((488,1079), n1, fill=FONT_COLOR,font=ImageFont.truetype("arial.ttf",40))
    n2_width, n2_height = draw.textsize(n2)
    draw.text((1301,1081), n2, fill=FONT_COLOR,font=ImageFont.truetype("arial.ttf",40))
    #image_source.save("./out/" + name +".png")
    #print('Saving Certificate of:', name)
    image_source.show()

if __name__ == "__main__":
    names = ["Soham Chakraborty", "Kaustav Giri", "Pritha Saha","Ujjaini Ray"]
    event = "Devfest 2k23"
    date = "28.12.2022"
    venue = "Taal Kutir Convention"

    desig = "Principal"
    design = "Student Head"
    n1 = "Mitra Basu"
    n2 = "P. K. Dan"
    for name in names:
        make_certificates2(name,event,date,venue,desig,design,n1,n2)
    print(len(names), "certificates done.")