import pandas as pd
import csv
import sqlite3

def JSONtoCSV(anythinginJson):
    obj= pd.read_json(anythinginJson, orient='records')
    obj.index+=1
    obj.to_csv("participantList.csv")

def emailListGenerator():
    connection= sqlite3.connect("instance/eventlabs.db")
    cursor = connection.cursor()
    sqlquery= "SELECT email FROM ParticipantsRegistration"
    cursor.execute(sqlquery)
    results= cursor.fetchall()
    for row in results:
        df= pd.read_sql_query(sqlquery, connection)
        df.to_csv('emailList.csv', index= False )



