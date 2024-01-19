//Generated the API Key for the weather application
const APIKey = "98fcbdcfb0b3d080b76818012068c994";

//Variable to store the searched City
let city = "";

//list of variables to be defined
let searchCity = $("#search-input");
let searchButton = $("#search-button");
let clearSearch = $("#clear-search");
let currentCity = $("#current-city");
let currentTemperature = $("#temperature");
let currentWindspeed = $("#wind-speed");
let currentHumidity = $("#humidity");
let savedCity = [];

//Function to find the City from the search box
function find(c) {
    for (var i=0; i < savedCity.length; i++) {
        if (c.toUpperCase() === savedCity[i]) {
            return -1;
        }
    }
    return 1;
};

//Funciton to display the weather 
function displayWeather(event) {
    event.preventDefault();
    if(searchCity.val().trim()!=="") {
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

//Create AJAX call
function currentWeather(city) {
    let queryURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function(response) {

        console.log(response);
    }

//Get Weather Icon
    let weatherIcon = response.weather[0].icon;
    let iconURL = "https://openweathermap.org/img/wn/"+ weathericon +"@2x.png";


//Get the date and parse the temp and 

//Dsiplay the 5 day forcast for the current city searched

//add the past searches dynamically to the search list

//display search when a previous search is clicked

//Render function

//clear search history from page

//click events