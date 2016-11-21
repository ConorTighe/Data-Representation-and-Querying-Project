from flask import Flask, render_template, redirect
from flask import send_file

app = Flask(__name__)



@app.route('/')
def index():
    return send_file("templates/index.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
