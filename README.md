# Entertainment Recommender

## CS50P:
>This was my final project for CS50’s Introduction to Programming with Python course.

>CS50P, Python, Flask, web development

## Features:

- [Flask](https://flask.palletsprojects.com/en/3.0.x/)
- [Requests](https://requests.readthedocs.io/en/latest/)
- [Random](https://docs.python.org/3/library/random.html)
- [Pytest](https://docs.pytest.org/en/7.1.x/contents.html)

>I used Flask Web Framework that is used for web application development and is based on Python.
>I used Requests to get data from api, Random to select only one result from the list of data sent by the api.
>I used Pytest for unit testing the get and post requests.

## Explaining the project:
>My final project is a website that recommends users one of the top popular anime or movie based on the genre that the user selects.

>After the user selects a genre the planet image shown below the genre dropdown transforms into a card.

>This card displays information about the random anime or movie, it includes the title, image and description about the anime or movie.

### Flask:
>I used Flask to develop this website, I found Flask to be very flexible and easier to get work done faster without thinking about too much hence I choose it over Django.

### Requests:
>I used the get method from the requests library to be able to get the response that is the animes or movies based on the genre that is sent from the frontend through an ajax request.

### Random:
>I used the choices method from the random library to get a single anime from a list of animes if an anime genre is selected or movie in the case that a movie genre was selected.

### Pytest:
>I used the pytest library along with a decorator called @pytest.fixture to be able to test the routes and get and post requests.

### Indepth Explanation of the project:
>For the frontend I used HTML, CSS and Javascript whereas for the backend I used Flask. The designing of the solar system feel and the genre buttons functioning as a dropdown as well as the reselect buttons were both done using only CSS. HTML was used to structure the page and Javascript was used to get the genre on selecting one of them, to make the planet change into a card, and to display a random anime or movie based on the genre. 

>Along with Javascript, AJAX was used to send the selected genre to the backend and to handle the returned anime or movie and to display it inside the card. Flask on the backend was used to get the selected genre and to send an api request to either an anime api or movie api based on the selected genre. The api would give a list of popular animes or movies depending on the api used. From the list one anime or movie is selected at random that is based on the selected genre, the title, image and description of the anime or movie is then returned back as a response to the AJAX, after which the AJAX displays the response data within the card.

>On displaying of the card, the dropdown button is hidden and we can see a reselect button, on click of which the dropdown appears again and we can return back to selecting another genre from the dropdown. In this way the Entertainment Recommender, recommends a popular anime based on the user selected genre.

## Video Demo:
>This is my youtube video showcasing my CS50P final project, Link: [Entertainment Recommender](https://youtu.be/ELfI_tzX1Go)

## Documentation
>https://flask.palletsprojects.com/en/3.0.x/

>https://requests.readthedocs.io/en/latest/

>https://docs.python.org/3/library/random.html

>https://docs.pytest.org/en/7.1.x/contents.html

## About CS50P
>CS50P is an OpenCourseWare course from Harvard University that is taught by David J. Malan.

>The course is an introduction to programming using a language called Python. It is designed for students with or without prior programming experience who’d like to learn Python specifically. Topics include functions, arguments, return values, variables and types, conditionals and boolean expressions, loops, exceptions, finding and fixing bugs, unit tests, third-party libraries, regular expressions, classes, objects, methods, properties, read and write files.

>It was an amazing experience thank you for everything CS50P.

> Where to get CS50P course?
https://learning.edx.org/course/course-v1:HarvardX+CS50P+Python/home or https://cs50.harvard.edu/python/2022/

[LinkedIn Shane Fernandes](https://www.linkedin.com/in/shane-fernandes-330677212/)