
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/projekte.html")
def projektTemplate():
    return render_template('projekte.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)