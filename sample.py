import csv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

EMAIL= os.getenv('email')
PASSWORD= os.getenv('password')
      
      
msg = MIMEMultipart()
msg['Subject'] = 'Thanks for Registering in our event  '
msg['From'] = EMAIL
msg['To'] ='kaustavgiri2017@gmail.com'
body = " -- BODY OF THE EMAIL -- "

msgText = MIMEText('<b>%s</b>' % (body), 'html')
msg.attach(msgText)

server = smtplib.SMTP('smtp.office365.com', 587)
server.starttls()
server.login(EMAIL, PASSWORD)
try:
    server.sendmail(EMAIL, 'kaustavgiri2017@gmail.com', msg.as_string())
except:
    print("An error occured.")
server.quit()