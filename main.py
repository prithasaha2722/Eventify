from flask import Flask, render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///eventlabs.db"
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

class ParticipantsRegistration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    walletaddress = db.Column(db.String, unique=True, nullable=False)
    address= db.Column(db.String, nullable=False)

class ParticipantsCheckIn(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    walletaddress = db.Column(db.String, unique=True, nullable=False)
    address= db.Column(db.String, nullable=False)

with app.app_context():
    db.create_all()

@app.route("/organizer", methods=["GET", "POST"])
def organizer_data():
    if request.method=="POST":
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
        organizer=Organizer(orgname=orgname, orgweb=orgweb, venue=venue, startdate=startdate, enddate=enddate, starttime=starttime, endtime=endtime, numberofattendee=numberofattendee, logo=logo, signature=signature)
        with app.app_context():
            db.session.add(organizer)
            db.session.commit()
    return render_template('Organizer.html')


if __name__ == "__main__":
    app.run(debug=True)

