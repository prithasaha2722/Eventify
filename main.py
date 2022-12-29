from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
import random
import csv
from certificates import certificate1, certificate2, certificate3

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///eventlabs.db"
db = SQLAlchemy()
db.init_app(app)

class Organizer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
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
    email = db.Column(db.String, unique=True, nullable=False, primary_key=True)
    name = db.Column(db.String)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    walletaddress = db.Column(db.String, unique=True, nullable=False)
    address = db.Column(db.String, nullable=False)

class ParticipantsRegistration(db.Model):
    email = db.Column(db.String, unique=True, nullable=False, primary_key=True)
    name = db.Column(db.String, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    walletaddress = db.Column(db.String, unique=True, nullable=False)
    address = db.Column(db.String, nullable=False)

with app.app_context():
    db.create_all()
    db.session.commit()


with app.app_context():
    db.create_all()
    db.session.commit()

@app.route("/organizer", methods=["GET", "POST"])
def organizer_data():
    if request.method=="POST":
        id= random.randint(0, 10000)
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
        organizer=Organizer(id=id, orgname=orgname, orgweb=orgweb, venue=venue, startdate=startdate, enddate=enddate, starttime=starttime, endtime=endtime, numberofattendee=numberofattendee, logo=logo, signature=signature)
        with app.app_context():
            db.session.add(organizer)
            db.session.commit()
    return render_template('Organizer.html')


@app.route("/participant", methods=["GET", "POST"])
def participant_registration():
    if request.method == 'POST':
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
            writer.writerow([email, name])
        with open('participantList.csv', 'a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([email, name, phone, walletaddress, address, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10])
        registration = ParticipantsRegistration( email=email, name=name, phone=phone, walletaddress=walletaddress, address=address)
        with app.app_context():
            db.session.add(registration)
            db.session.commit()
    return render_template('PartiReg.html')

@app.route("/certificates", methods=["GET", "POST"])
def certificate_gen():
    if request.method == 'POST':
        option_for_certificates=request.json['selected']
        if(option_for_certificates=="1"):
            certificate1.make_certificates1()
        elif(option_for_certificates=="2"):
            certificate2.make_certificates2()
        elif(option_for_certificates=="3"):
            certificate3.make_certificates3()


@app.route("/checkin", methods=["GET", "POST"])
def checkin():
    if request.method == 'POST':
        email = request.json['email']
        name = request.json['name']
        phone = request.json['phone']
        walletaddress = request.json['walletaddress']
        address = request.json['address']
        checkIn = ParticipantsCheckIn( email=email, name=name, phone=phone, walletaddress=walletaddress, address=address)
        with app.app_context():
            db.session.add(checkIn)
            db.session.commit()
    return render_template('CheckIn.html')


if __name__ == "__main__":
    app.run(debug=True)

