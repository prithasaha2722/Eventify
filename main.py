from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import random
import csv
from certificates import certificate1, certificate2, certificate3, cert
from mailing import  registration_mail, certificate_mail, ticket_mail, checkin_mail
from tickets import ticket1,ticket2,ticket3


eventdetails=[]
#eventdetails = [eventid, eventname, orgname, orgweb, venue, startdate, enddate, logo, signature]



####--------------------------------------Flask Configuration Starts---------------------------------------------------------------------------------------------------------------------------####

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///eventlabs.db"
db = SQLAlchemy()
db.init_app(app)

####-------------------------------------Flask Configuration Ends-------------------------------------------------------------------------------------------------------------------------####


####------------------------------Database(Model) starts----------------------------------------------------------------------------------------------------------------------###

class Organizer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    eventname = db.Column(db.String, nullable=False)
    orgname = db.Column(db.String, unique=True, nullable=False)
    orgweb = db.Column(db.String)
    venue = db.Column(db.String, nullable=False)
    startdate = db.Column(db.String, nullable=False)
    enddate = db.Column(db.String, nullable=False)
    starttime = db.Column(db.String, nullable=False)
    endtime = db.Column(db.String, nullable=False)
    numberofattendee = db.Column(db.Integer)
    logo = db.Column(db.String)
    signature = db.Column(db.String)

class ParticipantsCheckIn(db.Model):
    eventid = db.Column(db.Integer, nullable=False)
    eventname = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False, primary_key=True)
    name = db.Column(db.String)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    walletaddress = db.Column(db.String, unique=True, nullable=False)
    address = db.Column(db.String, nullable=False)

class ParticipantsRegistration(db.Model):
    eventid = db.Column(db.Integer, nullable=False)
    eventname = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False, primary_key=True)
    name = db.Column(db.String, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    walletaddress = db.Column(db.String, unique=True, nullable=False)
    address = db.Column(db.String, nullable=False)

with app.app_context():
    db.create_all()
    db.session.commit()

####---------------------------------Database(Model) ends------------------------------------------------------------------------------------------------------------------------------------------------------------#####

####----------------------------------Main Backend Operation File Starts----------------------------------------------------------------------------------------------------------------------------####

@app.route("/organizer", methods=["GET", "POST"])
def organizer_data():
    if request.method=="POST":
        id= random.randint(0, 10000)
        eventname = request.json['eventname']
        orgname = request.json['orgname']
        orgweb = request.json['orgweb']
        venue = request.json['venue']
        startdate = request.json['startdate']
        enddate = request.json['enddate']
        starttime = request.json['starttime']
        endtime = request.json['endtime']
        numberofattendee = request.json['numberofattendee']
        logo = request.json['logo']
        signature = request.json['signature']
        eventdetails.append(id)
        eventdetails.append(eventname)
        eventdetails.append(orgname)
        eventdetails.append(orgweb)
        eventdetails.append(venue)
        eventdetails.append(startdate)
        eventdetails.append(enddate)
        eventdetails.append(logo)
        eventdetails.append(signature)
        organizer=Organizer(id=id, eventname=eventname, orgname=orgname, orgweb=orgweb, venue=venue, startdate=startdate, enddate=enddate, starttime=starttime, endtime=endtime, numberofattendee=numberofattendee, logo=logo, signature=signature)
        with app.app_context():
            db.session.add(organizer)
            db.session.commit()
    return render_template('Organizer.html')


@app.route("/participant", methods=["GET", "POST"])
def participant_registration():
    if request.method == 'POST':
        eventid = eventdetails[0]
        eventname =eventdetails[1]
        email = request.json['email']
        name = request.json['name']
        phone = request.json['phone']
        walletaddress = request.json['walletaddress']
        address = request.json['address']
        Q1=request.json['Q1']
        Q2 = request.json['Q2']
        Q3 = request.json['Q3']
        Q4 = request.json['Q4']
        Q5 = request.json['Q5']
        Q6 = request.json['Q6']
        Q7 = request.json['Q7']
        Q8 = request.json['Q8']
        Q9 = request.json['Q9']
        Q10 = request.json['Q10']
        with open('participantList.csv', 'a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([eventid, eventname, email, name, phone, walletaddress, address, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10])
        registration = ParticipantsRegistration(eventid=eventid, eventname=eventname, email=email, name=name, phone=phone, walletaddress=walletaddress, address=address)
        with app.app_context():
            db.session.add(registration)
            db.session.commit()
    return render_template('PartiReg.html')

@app.route("/certificates", methods=["GET", "POST"])
def certificate_gen():
    if request.method == 'POST':
        with open('FinalAttendee.csv', 'r') as csvfile:
            rows = []
            csvreader = csv.reader(csvfile)
            for row in csvreader:
                rows.append(row)
            for rowlist in rows:
                name=rowlist[3]
                eventname= rowlist[1]
                option_for_certificates=request.json['selected']
                if(option_for_certificates=="1"):
                    certificate1.make_certificates1(name, "his/her", "field", "designation 1", "designation 2", "name1", "name2")
                elif(option_for_certificates=="2"):
                    certificate2.make_certificates2(name,eventname,"date","venue","desig","design","n1","n2")
                elif(option_for_certificates=="3"):
                    certificate3.make_certificates3(name,eventname,"date","org","desig","design","n1","n2")

@app.route("/tickets", methods=["GET", "POST"])
def ticket_gen():
    if request.method == 'POST':
        with open('participantList.csv', 'r') as csvfile:
            rows = []
            csvreader = csv.reader(csvfile)
            for row in csvreader:
                rows.append(row)
            for rowlist in rows:
                name=rowlist[3]
                eventname= rowlist[1]
                email=rowlist[2]
                option_for_ticket=request.json['selected']
                if(option_for_ticket=="1"):
                    ticket1.make_tickets1(name,eventname,eventdetails[5],eventdetails[2],eventdetails[4],email,"9999888876","17:00")
                elif(option_for_ticket=="2"):
                    ticket2.make_tickets2(name,eventname,eventdetails[5],eventdetails[2],eventdetails[4],email,"9999888876","17:00")
                elif(option_for_ticket=="3"):
                    ticket3.make_tickets3(name,eventname,eventdetails[5],eventdetails[2],eventdetails[4],email,"9999888876","17:00")


@app.route("/checkin", methods=["GET", "POST"])
def checkin():
    if request.method == 'POST':
        eventid = eventdetails[0]
        eventname = eventdetails[1]
        email = request.json['email']
        name = request.json['name']
        phone = request.json['phone']
        walletaddress = request.json['walletaddress']
        address = request.json['address']
        with open('FinalAttendee.csv', 'a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([eventid, eventname, email, name])
        checkIn = ParticipantsCheckIn(eventid=eventid, eventname=eventname, email=email, name=name, phone=phone, walletaddress=walletaddress, address=address)
        with app.app_context():
            db.session.add(checkIn)
            db.session.commit()
    return render_template('CheckIn.html')

######--------------------------------Main backend Operation Ends-----------------------------------------------------------------------------------------------------------------------------------------------####

#####----------------------------------Mail Sending Operations---------------------------------------------------------------------------------------------------------------------------------------------------######

@app.route("/registrationmail", methods=["GET", "POST"])
def registrationmail():
    if request.method == 'POST':
        registration_mail()

@app.route("/ticketmail", methods=["GET", "POST"])
def ticketmail():
    if request.method == 'POST':
        ticket_mail()

@app.route("/checkinmail", methods=["GET", "POST"])
def checkinmail():
    if request.method == 'POST':
        checkin_mail()

@app.route("/certificatemail", methods=["GET", "POST"])
def certificatemail():
    if request.method == 'POST':
        certificate_mail()


#####----------------------------------Mail Sending Operations---------------------------------------------------------------------------------------------------------------------------------------------------######


if __name__ == "__main__":
    app.run(debug=True)


## CSV for participantList
##  [eventid, eventname, email, name, phone, walletaddress, address, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10]


## CSV for FinalAttendee
## [eventid, eventname, email, name]