from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy




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

if __name__ == "__main__":
    app.run(debug=True)


### eventId, Date (month, date) , event name, venue, small description, banner url, free or paid,  (can be veiwed by anyone unauthorized too.)
### (after authorization) toke pathabo: wallet Address, name, email,  ami pabo: upper details aar user ta kon kon event e already refistered