from PIL import Image,ImageDraw,ImageFont
#FONT_FILE = ImageFont.truetype("arial.ttf", 50)
#FONT_FILE_o = ImageFont.truetype("arial.ttf", 30)
FONT_COLOR = "#000000"
t1 = Image.open('certificates/cert/cert3.png')
WIDTH, HEIGHT = t1.size
def make_certificates3(name,event,date,org,desig,design,n1,n2):
    image_source = Image.open('certificates/cert/cert3.png')
    draw = ImageDraw.Draw(image_source)
    name_width, name_height = draw.textsize(name)
    draw.text((813,720), name, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",90))
    event_width, event_height = draw.textsize(event)
    draw.text((696,919), event, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    date_width, date_height = draw.textsize(date)
    draw.text((1560,912), date, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    org_width, org_height = draw.textsize(org)
    draw.text((1153,916), org, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    name_width, name_height = draw.textsize(name)
    draw.text((1132,871), name, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))

    desig_width, desig_height = draw.textsize(desig)
    draw.text((432,1220), desig, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    design_width, design_height = draw.textsize(design)
    draw.text((1404,1204), design, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    n1_width, n1_height = draw.textsize(n1)
    draw.text((433,1133), n1, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    n2_width, n2_height = draw.textsize(n2)
    draw.text((1391,1123), n2, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    #image_source.save("./out/" + name +".png")
    #print('Saving Certificate of:', name)
    image_source.show()

if __name__ == "__main__":
    names = ["Soham Chakraborty", "Kaustav Giri", "Pritha Saha","Ujjaini Ray"]
    event = "Metathon"
    date = "28.12.2022"
    #venue = "Taal Kutir Convention"
    org = "Presidency"

    desig = "Principal"
    design = "Student Head"
    n1 = "Mitra Basu"
    n2 = "P. K. Dan"
    for name in names:
        make_certificates3(name,event,date,org,desig,design,n1,n2)
    print(len(names), "certificates done.")