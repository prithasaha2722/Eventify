import pandas as pd
import csv
import sqlite3

def JSONtoCSV(anythinginJson):
    participants= anythinginJson['participant']
    with open('csvimportfromjson.py', 'a') as f:
        fieldnames=participants[0].keys()
        writer= csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for attendee in participants:
            writer.writerow(attendee)

def emailListGenerator():
    connection= sqlite3.connect("instance/eventlabs.db")
    cursor = connection.cursor()
    sqlquery= "SELECT email FROM ParticipantsRegistration"
    cursor.execute(sqlquery)
    results= cursor.fetchall()
    for row in results:
        df= pd.read_sql_query(sqlquery, connection)
        df.to_csv('emailList.csv', index= False )



