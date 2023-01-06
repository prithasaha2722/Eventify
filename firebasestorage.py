import firebase_admin
from firebase_admin import credentials, storage

cred = credentials.Certificate("path/to/your/credentials.json")
firebase_admin.initialize_app(cred,{'storageBucket': 'your_bucket_link_without_gs://'}) # connecting to firebase