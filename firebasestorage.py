import pyrebase

config={
    "apiKey": "AIzaSyAcGCVkhH3hThg2T671zIMoIaljareB6kY",
    "authDomain": "eventify-cee22.firebaseapp.com",
    "projectId": "eventify-cee22",
    "storageBucket": "eventify-cee22.appspot.com",
    "serviceAccount": "serviceAccountKey.json"
}

firebase_storage = pyrebase.initialize_app(config)
storage= firebase_storage.storage()

counter=1
storage.child('banners/bannersave/banner.png').put(f"banner{counter}")

counter= counter+1

