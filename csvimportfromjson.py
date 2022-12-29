import pandas as pd
import csv
import sqlite3

def emailListGenerator():
    connection= sqlite3.connect("instance/eventlabs.db")
    cursor = connection.cursor()
    sqlquery= "SELECT email FROM ParticipantsRegistration"
    cursor.execute(sqlquery)
    results= cursor.fetchall()
    for row in results:
        df= pd.read_sql_query(sqlquery, connection)
        df.to_csv('emailList.csv', index= False )



