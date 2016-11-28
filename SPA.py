from flask import Flask, render_template
import sqlite3

DATABASE = 'data/data.db'

app = Flask(__name__)

def get_db():
  db = getattr(Flask.g, '_database', None)
  if db is None:
    db = Flask.g._database = sqlite3.connect(DATABASE)
  return db

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/SaveFile.html')
def SaveFile():
    return render_template("SaveFile.html")

if __name__ == "__main__":
    app.debug = True
    app.run()

