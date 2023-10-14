from flask import Flask, render_template

app = Flask(__name__)

def main():
    app.run(debug=True)

@app.route('/')
def index():
    return render_template('index.html')

def function_2():
    ...

def function_n():
    ...

if __name__ == "__main__":
    main()