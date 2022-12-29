from PIL import Image,ImageDraw,ImageFont
FONT_COLOR = "#000000"
temp = Image.open('tckts/tic1.png')
WIDTH, HEIGHT = temp.size
def make_tickets1(name,event,date,org,venue,email,phone,time):
    image_source = Image.open('tckts/tic1.png')
    draw = ImageDraw.Draw(image_source)
    name_width, name_height = draw.textsize(name)
    draw.text((73,317), name, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    event_width, event_height = draw.textsize(event)
    draw.text((1127,293), event, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",70))
    date_width, date_height = draw.textsize(date)
    draw.text((1165,485), date, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",30))
    venue_width, venue_height = draw.textsize(venue)
    draw.text((1049,386), venue, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",40))
    org_width, org_height = draw.textsize(org)
    draw.text((695,73), org, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",50))
    email_width, email_height = draw.textsize(email)
    draw.text((72,544),email, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",20))
    phone_width, phone_height = draw.textsize(phone)
    draw.text((74,427),phone, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",20))
    time_width, time_height = draw.textsize(time)
    draw.text((1176,528),time, fill=FONT_COLOR,font=ImageFont.truetype("Arial.ttf",20))
    image_source.show()

if __name__ == "__main__":
    names = ["Soham Chakraborty", "Kaustav Giri", "Pritha Saha","Ujjaini Ray"]
    event = "Metathon"
    date = "28.12.2022"
    venue = "Taal Kutir Convention"
    org = "Student Developers Student Clubs, Kolkata"
    phone = "9800910906"
    email = "prithasaha19@gmail.com"
    time = "09:30 a.m."
    for name in names:
        make_tickets1(name,event,date,org,venue,email,phone,time)
    print(len(names), "Tickets done.")