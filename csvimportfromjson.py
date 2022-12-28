import pandas as pd
import csv

def JSONtoCSV(anythinginJson):
    obj= pd.read_json(anythinginJson, orient='records')
    obj.index+=1
    obj.to_csv("participantList.csv")

def mailList(anything):
    with open('emailList.csv', 'w') as f:
        writer = csv.writer(f)
        writer.writerow(['Email ID', 'Name', 'Phone', 'Wallet Address', 'Address'])
        for items in anything:
            writer.writerows(items)



