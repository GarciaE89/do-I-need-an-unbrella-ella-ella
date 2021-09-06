var openWeatherApi = "37758de61e4631e7c9db9d1e9dae46d1";

var currentCityURL = "https://api.openweathermap.org/data/2.5/weather?"

var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?"

var now = moment();

var currentDay = (now.format("ll"));

function createWeatherDiv() {
    var weather = document.getElementById("weatherForecast")
    var weatherDiv = document.createElement("div");
    weatherDiv.className = "weatherDiv";
    weather.append(weatherDiv);
}

var searchId = document.getElementById("Search")
var searchBtn = document.createElement("button");
searchBtn.className = "button btn btn-secondary";
var searchIcon = document.createElement("i")
searchIcon.className = "fas fa-search";
searchBtn.append(searchIcon);
searchId.append(searchBtn);
var searchHistoryList = document.getElementById("cities");
var searchHistory = JSON.parse(localStorage.getItem("cities")) || []
var currentSearch = document.getElementById("currentSearch");
