//Generated the API Key for the weather application
const APIKey = "98fcbdcfb0b3d080b76818012068c994";

//Variable to store the searched City
let City = "";

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
