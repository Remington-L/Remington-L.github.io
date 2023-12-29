import os
from cs50 import SQL
from flask import Flask, redirect, render_template, request
from werkzeug.utils import secure_filename

app = Flask(__name__)

db = SQL("sqlite:///tt.db")
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'pak'}

@app.route("/", methods=["GET"])
def index():

    runs = db.execute("SELECT * FROM tracker;")
    return render_template("index.html", runs=runs)


@app.route("/add", methods=["GET", "POST"])
def add():
    if request.method == "GET":
        return render_template("add.html")
    else:
        db.execute("INSERT INTO tracker (hours, minutes, seconds, notes) VALUES (?, ?, ?, ?)",
                   request.form.get("hours"),
                   request.form.get("minutes"),
                   request.form.get("seconds"),
                   request.form.get("notes")
                   )
        id = db.execute("SELECT id FROM tracker ORDER BY id DESC LIMIT 1;")[0]['id']
        file = request.files['file']
        if file and file.filename != '':
            filename = secure_filename(file.filename)
            file.save(os.path.join(UPLOAD_FOLDER, f'rando{id}.pak'))
            return redirect("/")
    return redirect("/")


@app.route("/total", methods=["GET"])
def total():

    hours = db.execute("SELECT SUM(hours) AS sum FROM tracker;")[0]['sum']
    minutes = db.execute("SELECT SUM(minutes) AS sum FROM tracker;")[0]['sum']
    seconds = db.execute("SELECT SUM(seconds) AS sum FROM tracker;")[0]['sum']
    hours = hours * 3600
    minutes = minutes * 60
    total = minutes + hours + seconds
    hours = total // 3600
    total = total % 3600
    minutes = total // 60
    seconds = total % 60

    return render_template("total.html", hours=hours, minutes=minutes, seconds=seconds)

if __name__ == "__main__":
    app.run()