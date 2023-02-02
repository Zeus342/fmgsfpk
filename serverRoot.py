
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/projects")
def projekte():
    return render_template('projects.html')

@app.route("/unserprojekt")
def unserprojekt():
    return render_template('unserprojekt.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)