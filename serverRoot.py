
from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'H2^4jmF2vK6c*D#'

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()  # Clear session data
    return redirect(url_for('login'))  # Redirect to the login page

@app.route('/authenticate', methods=['POST'])
def authenticate():
    correct_username = 'Franz'
    correct_password = 'bivhns'

    entered_username = request.form.get('username')
    entered_password = request.form.get('password')

    if entered_username == correct_username and entered_password == correct_password:
        session['authenticated'] = True
        return redirect(url_for('protected_content'))
    else:
        return redirect(url_for('login'))

@app.route('/home')
def protected_content():
    if session.get('authenticated'):
        return render_template('franzroehrle.com.html')
    else:
        return redirect(url_for('login'))

#@app.route("/")
#def index():
#    return render_template('franzroehrle.com.html')
#@app.route("/")
#def index():
#    return render_template('login.html')

@app.route("/latest")
def latest():
    if session.get('authenticated'):
        return render_template('latest.html')
    else:
        return redirect(url_for('login'))

@app.route("/portfolio")
def portfolio():
    if session.get('authenticated'):
        return render_template('portfolio.html')
    else:
        return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, ssl_context=('franzroehrle.com.crt', 'franzroehrle.com.key'))