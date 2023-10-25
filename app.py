from random import choice
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/wisdom")
def wisdom():
    quotes = [
        "Confucius say, man who run before bus get tired",
        "Confucius say, cow with no legs, ground beef",
        "Life is really simple, but we insist on making it complicated.",
    ]
    return f'<button hx-get="/wisdom" hx-swap="outerHTML">{choice(quotes)}</button>'


if __name__ == "__main__":
    app.run(debug=True)
