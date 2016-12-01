import sql as sql
from flask import Flask, render_template, request, jsonify
import sqlite3
import requests
from requests import Request
import json

DATABASE = 'data/data.db'

app = Flask(__name__)

db = sqlite3.connect(DATABASE)
cur = db.cursor()

cur.execute("CREATE TABLE IF NOT EXISTS myrecipes(id INTEGER PRIMARY KEY, name TEXT, rating TEXT, author TEXT, source TEXT)")

# dummy data to test if database is working
# cur.execute('INSERT INTO myrecipes(name,rating,author,source) VALUES("test","test","test","test")')

db.commit()

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/SaveFile', methods=['POST', 'GET'])
def SaveFile():
    send_back = {"status": "failed"}
    if request.method == 'POST':
        try:
            j = requests.get('/SaveFile')
            data = j.json()
            cur.execute('INSERT INTO myrecipes(name,rating,author,source) VALUES(?,?,?,?)', data['name','rating','author','source'])
            db.commit()
            send_back["status"] = "success"
        except sqlite3.Error as err:
            send_back["status"] = str(err)
    return jsonify(send_back)

@app.route('/List')
def list():

    cur.execute("select * from myrecipes")

    rows = cur.fetchall();
    return render_template("LoadFile.html", rows=rows)



if __name__ == "__main__":
    app.debug = True
    app.run()

#j=requests.get(url)