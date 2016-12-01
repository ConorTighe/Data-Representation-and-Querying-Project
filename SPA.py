import sql as sql
from flask import Flask, render_template, request, jsonify
import sqlite3
import requests
from requests import Request
import json

# Set up app
app = Flask(__name__)
# CLink to database
DATABASE = "data/data.db"
# Connect to database
db = sqlite3.connect(DATABASE)
# Set up cursor to navigate database
cur = db.cursor()
#Create table
cur.execute("CREATE TABLE IF NOT EXISTS myrecipes(id INTEGER PRIMARY KEY, name TEXT, rating TEXT, author TEXT, source TEXT)")

# dummy data to test if database show local db is working
# cur.execute('INSERT INTO myrecipes(name,rating,author,source) VALUES("test","test","test","test")')

# commit the table
db.commit()

# Home route
@app.route('/')
def index():
    return render_template("index.html")

# Where the data is sent from the AJAX
@app.route('/SaveFile', methods=['POST', 'GET'])
def SaveFile():
    send_back = {"status": "failed"}
    if request.method == 'POST':
        try:
            # Extract the data from the AJAX
            data = request.get_json()
            # Put the data into the table
            cur.execute('INSERT INTO myrecipes(name,rating,author,source) VALUES(?,?,?,?)', data['name','rating','author','source'])
            # Save changes to database
            db.commit()
            #Let the user know it worked
            send_back["status"] = "success"
        except sqlite3.Error as err:
            # Print a traceback error if failed
            send_back["status"] = str(err)
    return jsonify(send_back)

# Display the data taken in
@app.route('/List')
def list():
    # List everything of the user
    cur.execute("select * from myrecipes")
    # get the rows
    rows = cur.fetchall();
    # apply rows to html
    return render_template("SaveFile.html", rows=rows)



if __name__ == "__main__":
    # debugger
    app.debug = True
    # run app
    app.run()

#j=requests.get(url)