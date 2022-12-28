from flask import Flask, render_template, redirect, request, url_for
from flask_sqlalchemy import SQLAlchemy
import random

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
    email = db.Column(db.String, unique=True, nullable=False)
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
        registration = ParticipantsRegistration( email=email, name=name, phone=phone, walletaddress=walletaddress, address=address)
        with app.app_context():
            db.session.add(registration)
            db.session.commit()
    return render_template('PartiReg.html')


@app.route("/participantsallinone", methods=["GET", "POST"])
def participant_registration():
    if request.method == 'POST':
        participant = request.json['participant']
        

if __name__ == "__main__":
    app.run(debug=True)

