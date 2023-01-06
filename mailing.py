import csv
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os

load_dotenv()

EMAIL= os.getenv('email')
PASSWORD= os.getenv('password')



####----------------------------Registration Mail Send----------------------------------------------------------------------------------------------------####

def registration_mail():
  with open('participantList.csv', 'r') as csvfile:
    rows = []
    csvreader = csv.reader(csvfile)
    for row in csvreader:
      rows.append(row)
    for rowlist in rows:
      msg = MIMEMultipart()
      msg['Subject'] = 'New Event Live '
      msg['From'] = EMAIL
      msg['To'] = rowlist[2]
      body = " -- BODY OF THE EMAIL -- "

      msgText = MIMEText('<b>%s</b>' % (body), 'html')
      msg.attach(msgText)

      server = smtplib.SMTP('smtp.office365.com', 587)
      server.starttls()
      server.login(EMAIL, PASSWORD)
      try:
        server.sendmail(EMAIL, anymail, msg.as_string())
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
      msg['From'] = EMAIL
      msg['To'] = rowlist[2]
      body = " -- BODY OF THE EMAIL -- "

      msgText = MIMEText('<b>%s</b>' % (body), 'html')
      msg.attach(msgText)

      server = smtplib.SMTP('smtp.office365.com', 587)
      server.starttls()
      server.login(EMAIL, PASSWORD)
      try:
        server.sendmail(EMAIL, rowlist[2], msg.as_string())
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
      msg['From'] = EMAIL
      msg['To'] = rowlist[2]
      body = " -- BODY OF THE EMAIL -- "

      msgText = MIMEText('<b>%s</b>' % (body), 'html')
      msg.attach(msgText)

      server = smtplib.SMTP('smtp.office365.com', 587)
      server.starttls()
      server.login(EMAIL, PASSWORD)
      try:
        server.sendmail(EMAIL, rowlist[2], msg.as_string())
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
      msg['From'] = EMAIL
      msg['To'] = rowlist[2]
      body = " -- BODY OF THE EMAIL -- "

      msgText = MIMEText('<b>%s</b>' % (body), 'html')
      msg.attach(msgText)

      server = smtplib.SMTP('smtp.office365.com', 587)
      server.starttls()
      server.login(EMAIL, PASSWORD)
      try:
        server.sendmail(EMAIL, rowlist[2], msg.as_string())
      except:
        print("An error occured.")
      server.quit()

def bannerify_mail(anyemail):
  msg = MIMEMultipart()
  msg['Subject'] = 'Thanks for Registering in our event  '
  msg['From'] = EMAIL
  msg['To'] = anyemail
  body = " -- BODY OF THE EMAIL -- "

  msgText = MIMEText('<b>%s</b>' % (body), 'html')
  msg.attach(msgText)

  server = smtplib.SMTP('smtp.office365.com', 587)
  server.starttls()
  server.login(EMAIL, PASSWORD)
  try:
    server.sendmail(EMAIL, anyemail , msg.as_string())
  except:
    print("An error occured.")
  server.quit()