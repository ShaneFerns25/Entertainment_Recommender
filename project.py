from flask import Flask, render_template, request
import requests, random

app = Flask(__name__)

def main():
    app.run(debug=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/animegenre',methods=['GET','POST'])
def genre():
    genre_id = request.values.get('selected')

    response = requests.get(f"https://api.jikan.moe/v4/anime?type=tv&rating=g&rating=pg&rating=pg13&order_by=popularity&genres={genre_id}&limit=20")

    if response.status_code == 200:
        anime_list = response.json()
        list_data=anime_list["data"]
        list_data=random.choices(list_data)
        image = list_data[0]["images"]["jpg"]["image_url"]
        title = list_data[0]["title"]
        desc = list_data[0]["synopsis"].split('\n')[0]
        duplicate = desc
        
        desc=''
        for index,word in enumerate(duplicate.split(' ')):
            desc+=word+" "
            if index==79:
                desc+= "..."
                break
        
        data=[{'image':image,'title':title,'desc':desc}]

        return data
    else:
        # Handle the error
        print("An error occurred while retrieving the list of anime.")
        return 'ok'

@app.route('/moviegenre')
def moviegenre():
    return 'hi'

if __name__ == "__main__":
    main()