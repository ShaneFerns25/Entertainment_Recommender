from flask import Flask, render_template, request

app = Flask(__name__)

def main():
    app.run(debug=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/genre',methods=['POST'])
def genre():
    genre = request.values.get('selected')
    print(genre)
    return 'ok'

def function_n():
    ...

if __name__ == "__main__":
    main()