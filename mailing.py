import csv
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import re

file= open('config.txt', 'r')
read= file.readlines()
modified=[]
for line in read:
  if line not in modified:
    modified.append(line.strip())



####----------------------------Registration Mail Send----------------------------------------------------------------------------------------------------####

def registration_mail(anymail):
  with open('participantList.csv', 'r') as csvfile:
      msg = MIMEMultipart()
      msg['Subject'] = 'Thanks for Registering in our event  '
      msg['From'] = modified[0]
      msg['To'] = anymail
      body = " -- BODY OF THE EMAIL -- "

      msgText = MIMEText('<b>%s</b>' % (body), 'html')
      msg.attach(msgText)

      server = smtplib.SMTP('smtp.office365.com', 587)
      server.starttls()
      server.login(modified[0], modified[1])
      try:
        server.sendmail(modified[0], anymail, msg.as_string())
      except:
        print("An error occured.")
      server.quit()


####----------------------------------------Ticket Send Mail--------------------------------------------------------------------------------------####

def ticket_mail():
  with open('participantList.csv', 'r') as csvfile:
    rows = []
    csvreader = csv.reader(csvfile)
    for row in csvreader:
      rows.append(row)
    for rowlist in rows:
      msg = MIMEMultipart()
      msg['Subject'] = 'Congratulation, You are In  '
      msg['From'] = modified[0]
      msg['To'] = rowlist[2]
      body = " -- BODY OF THE EMAIL -- "

      msgText = MIMEText('<b>%s</b>' % (body), 'html')
      msg.attach(msgText)

      server = smtplib.SMTP('smtp.office365.com', 587)
      server.starttls()
      server.login(modified[0], modified[1])
      try:
        server.sendmail(modified[0], rowlist[2], msg.as_string())
      except:
        print("An error occured.")
      server.quit()


####----------------------------------------------Checkin Mail Sending-------------------------------------------------------------------------------####

def checkin_mail():
  with open('FinalAttendee.csv', 'r') as csvfile:
    rows = []
    csvreader = csv.reader(csvfile)
    for row in csvreader:
      rows.append(row)
    for rowlist in rows:
      msg = MIMEMultipart()
      msg['Subject'] = 'Confirm your CheckIn for the event'
      msg['From'] = modified[0]
      msg['To'] = rowlist[2]
      body = " -- BODY OF THE EMAIL -- "

      msgText = MIMEText('<b>%s</b>' % (body), 'html')
      msg.attach(msgText)

      server = smtplib.SMTP('smtp.office365.com', 587)
      server.starttls()
      server.login(modified[0], modified[1])
      try:
        server.sendmail(modified[0], rowlist[2], msg.as_string())
      except:
        print("An error occured.")
      server.quit()


def certificate_mail():
  with open('FinalAttendee.csv', 'r') as csvfile:
    rows = []
    csvreader = csv.reader(csvfile)
    for row in csvreader:
      rows.append(row)
    for rowlist in rows:
      msg = MIMEMultipart()
      msg['Subject'] = 'Certificate of Participation '
      msg['From'] = modified[0]
      msg['To'] = rowlist[2]
      body = " -- BODY OF THE EMAIL -- "

      msgText = MIMEText('<b>%s</b>' % (body), 'html')
      msg.attach(msgText)

      server = smtplib.SMTP('smtp.office365.com', 587)
      server.starttls()
      server.login(modified[0], modified[1])
      try:
        server.sendmail(modified[0], rowlist[2], msg.as_string())
      except:
        print("An error occured.")
      server.quit()

def bannerify_mail(anyemail):
  msg = MIMEMultipart()
  msg['Subject'] = 'Thanks for Registering in our event  '
  msg['From'] = modified[0]
  msg['To'] = anyemail
  body = " -- BODY OF THE EMAIL -- "

  msgText = MIMEText('<b>%s</b>' % (body), 'html')
  msg.attach(msgText)

  server = smtplib.SMTP('smtp.office365.com', 587)
  server.starttls()
  server.login(modified[0], modified[1])
  try:
    server.sendmail(modified[0], anyemail , msg.as_string())
  except:
    print("An error occured.")
  server.quit()