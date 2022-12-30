import csv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import re

msg = MIMEMultipart()
msg['Subject'] = 'Thanks for Registering in our event  '
msg['From'] = 'eventifyeventmanager@outlook.com'
msg['To'] ='kaustavgiri2017@gmail.com'
body = " -- BODY OF THE EMAIL -- "

msgText = MIMEText('<b>%s</b>' % (body), 'html')
msg.attach(msgText)

server = smtplib.SMTP('smtp.office365.com', 587)
server.starttls()
server.login('eventifyeventmanager@outlook.com', 'KGSCPS@2023')
try:
    server.sendmail('eventifyeventmanager@outlook.com', 'kaustavgiri2017@gmail.com', msg.as_string())
except:
    print("An error occured.")
server.quit()