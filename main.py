from flask import Flask
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

@app.route("/")
def hello_world():



if __name__ == "__main__":
    app.run(debug=True)

