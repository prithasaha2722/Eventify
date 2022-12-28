import csv
import pandas as pd

def JSONtoCSV(anythinginJson):
    obj= pd.read_json(anythinginJson, orient='records')
    obj.index+=1
    obj.to_csv("participantList.csv")

def emailcsvatregistration(emailstuffs):
    with open("emailList.csv", "a"):

