from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import csv



####--------------------------------------Flask Configuration Starts---------------------------------------------------------------------------------------------------------------------------####

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///eventlabs.db"
db = SQLAlchemy()
db.init_app(app)

####-------------------------------------Flask Configuration Ends-------------------------------------------------------------------------------------------------------------------------####


####------------------------------Database(Model) starts----------------------------------------------------------------------------------------------------------------------###

class EventDetails(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    eventname = db.Column(db.String, nullable=False)
    orgname = db.Column(db.String, unique=True, nullable=False)
    orgweb = db.Column(db.String)
    venue = db.Column(db.String, nullable=False)
    startdate = db.Column(db.String, nullable=False)
    enddate = db.Column(db.String, nullable=False)
    starttime = db.Column(db.String, nullable=False)
    endtime = db.Column(db.String, nullable=False)
    logo = db.Column(db.String)
    signature = db.Column(db.String, nullable=False)
    cost = db.Column(db.Integer, nullable=False)
    walletaddress = db.Column(db.String, nullable=False)
    ticketTemplate = db.Column(db.String, nullable=False)
    certificateTemplate= db.Column(db.String, nullable=False)
    bannerTemplate= db.Column(db.String, nullable=False)

class Participants(db.Model):
    eventid = db.Column(db.Integer, nullable=False)
    eventname = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False, primary_key=True)
    name = db.Column(db.String, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    address = db.Column(db.String, nullable=False)

with app.app_context():
    db.create_all()
    db.session.commit()

@app.route("/eventdetails", methods=["GET", "POST"])
def event_data():
    if request.method=="POST":
        eventname = request.json['eventname']
        orgname = request.json['orgname']
        orgweb = request.json['orgweb']
        venue = request.json['venue']
        startdate = request.json['startdate']
        enddate = request.json['enddate']
        starttime = request.json['starttime']
        endtime = request.json['endtime']
        logo = request.json['logo']
        signature = request.json['signature']
        cost = request.json['cost']
        walletaddress = request.json['walletaddress']
        ticketTemplate = request.json['ticketTemplate']
        certificateTemplate = request.json['certificateTemplate']
        bannerTemplate = request.json['bannerTemplate']

        organizer=EventDetails(eventname=eventname, orgname=orgname, orgweb=orgweb, venue=venue, startdate=startdate, enddate=enddate, starttime=starttime, endtime=endtime, logo=logo, signature=signature, cost=int(cost), walletaddress=walletaddress, ticketTemplate=ticketTemplate, certificateTemplate=certificateTemplate, bannerTemplate=bannerTemplate)
        with app.app_context():
            db.session.add(organizer)
            db.session.commit()
    return render_template('eventdetails.html')

@app.route("/participantdetails", methods=["GET", "POST"])
def participants():
    if request.method == 'POST':
        eventid = request.json['eventid']
        eventname =request.json['eventname']
        venue= request.json['venue']
        time= request.json['time']
        date=request.json['time']
        email = request.json['email']
        name = request.json['name']
        phone = request.json['phone']
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
            writer.writerow([eventid, eventname, email, name, phone, address, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10])
        registration = Participants(eventid=int(eventid), eventname=eventname, email=email, name=name, phone=int(phone), address=address)
        with app.app_context():
            db.session.add(registration)
            db.session.commit()
    return render_template('PartiReg.html')


####-------------------------------------------Server Execution Code------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------####

if __name__ == "__main__":
    app.run(debug=True)


### eventId, Date (month, date) , event name, venue, small description, banner url, free or paid,  (can be veiwed by anyone unauthorized.)

### (after authorization) toke pathabo: wallet Address, name, email,  ami pabo: upper details aar user ta kon kon event e already registered