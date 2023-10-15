from flask import Flask, jsonify, render_template, request
import requests

app = Flask(__name__)

def main():
    app.run(debug=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/genre',methods=['POST'])
def genre():
    genre_id = request.values.get('selected')

    response = requests.get(f"https://api.jikan.moe/v4/anime?type=tv&rating=g&rating=pg&rating=pg13&order_by=popularity&genres={genre_id}&limit=1")
    print(response)
    if response.status_code == 200:
        anime_list = response.json()
        data=anime_list["data"][0]
        image = data["images"]["jpg"]["image_url"]
        title = data["title"]
        desc = data["synopsis"].split('\n')[0]
        print(image,title,desc)
    else:
        # Handle the error
        print("An error occurred while retrieving the list of anime.")
    return 'ok'

def function_n():
    ...

if __name__ == "__main__":
    main()