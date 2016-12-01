# Data-Representation-and-Querying-Project 2016
## Conor Tighe - Meal Manager Web App - G00314417
This repository contains a single web application called Meal Manager that I will be submitting as my project for Data Representation and Querying, a third year software development module in GMIT in the Department of Computer Science and Applied Physics. The Flask python framwork is required to serve the applcation to the browser.

## Project Overview:
The aim of my project is to create a hub where a user can find a recipe, view the ingrediants and save the recipe locally. The web application uses an online API to search a wide selection of meal blogs and review sites, It then uses a local database to store the recipes for the user. I used a HTML, CSS, and JS Framework called [Bootstrap](http://getbootstrap.com/) to make the UI fast to develope and the data easy to display aesthetically on the front end. I decided to use [Sqlite](https://sqlite.org/) to create the database as apposed to  couchDB or MongoDB as I feel sqlite was more suitable for this app and the purpose of the apps storage. I used a API found on [Mashape](https://www.mashape.com/), this is a site which hosts APIs for companys like [Amazon](https://www.amazon.co.uk/), [Spotify](https://www.spotify.com/ie/), [ESPN](http://www.espn.com/) and more which was one of the main reasons I used them as I wanted to ensure the API would be reliable and secure for my project. To interact with the API I used the AJAX calls in the [jQuery](https://jquery.com/) library to GET recipes from Mashape using a Mashape key, and to later POST those recipe details to mysqlite. A ingredients list is set up as soon as the app is opened with a bootstrap table header, the data is later injected into the table depending on what recipe is clicked on and can be deleted individually. After reading about wensite GIU design online I decided to use the univeral symbols in Bootstrap to so the user knows what to do visually from the get go.

### The API I will be using is called Food2Fork:
 
[![Food2Fork](static/img/preview.jpg)](https://www.youtube.com/watch?v=_inPpj-qiM0)

## User manual:

Open the directory and run SPA.py to start the application, then go to http://127.0.0.1:5000/ to view the app locally, you can also navigate to the directory and run `python SPA.py` to start the app. You should see the following if done correctly:
![Home](static/img/home.jpg "Meal Manager")



Enter a food or meal you wish to search for then click the search button. Once the app has loaded the recipes from the API click the picture to list the ingredients required to make this meal, if for what ever reason you cant use a certain ingredient as you cant obtain it or have an allergy use the delete button to remove it from the list. Details on the recipe such as site rating and author will appear beside the image, below these there are two options, I link to the website that provided the recipe and a button to save the recipe locally on you machine.


#### References:

[sqlite and flask](https://www.tutorialspoint.com/flask/flask_sqlite.htm)


[Thenewboston Flask tutorial](https://www.youtube.com/watch?v=ZVGwqnjOKjk)


[Mashape Docs](http://docs.mashape.com/javascript)