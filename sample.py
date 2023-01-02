import csv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import re

file= open('config.txt', 'r')
read= file.readlines()
modified=[]
for line in read:
  if line not in modified:
    modified.append(line.strip())
      
      
msg = MIMEMultipart()
msg['Subject'] = 'Thanks for Registering in our event  '
msg['From'] = modified[0]
msg['To'] ='kaustavgiri2017@gmail.com'
body = " -- BODY OF THE EMAIL -- "

msgText = MIMEText('<b>%s</b>' % (body), 'html')
msg.attach(msgText)

server = smtplib.SMTP('smtp.office365.com', 587)
server.starttls()
server.login(modified[0], modified[1])
try:
    server.sendmail(modified[0], 'kaustavgiri2017@gmail.com', msg.as_string())
except:
    print("An error occured.")
server.quit()