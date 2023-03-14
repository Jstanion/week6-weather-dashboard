// Set up API key for application use
const apiKey = "9b1b9db6340f568e7be7e6cca77bfe2c";

// Global variables
let submitButton = document.getElementById('submit-button');

// Function to format the date using dayjs
const formatDate = function(date) {
    return dayjs(date).format("MM/DD/YYYY");
};

// When the user enters a city and submits the form, fetch the current and future weather data for that city using an API and added to the search history.
const getCoordinates = function() {
    let searchCity = document.querySelector('#search-bar').value;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&appid=${apiKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data[0].lat, data[0].lon);
            let cityLat = data[0].lat;
            let cityLon = data[0].lon;
            weatherCondition(cityLat, cityLon);
        })
};

const weatherCondition = function(cityLat, cityLon) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}&units=imperial`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.list[0].main.temp);
        });
};

    submitButton.addEventListener("click", function(){
        getCoordinates();
    });
        
        
    // WHEN I view current weather conditions for that city
    // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
        // Display the current weather conditions for the city, including the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed.
        //using dayjs for date time info
    
    
    // WHEN I view future weather conditions for that city
    // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
        // Display the future weather conditions for the city in a 5-day forecast, including the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity.
        //using dayjs for date info
    
    
    // WHEN I click on a city in the search history
    // THEN I am again presented with current and future conditions for that city
        // Add the searched city to the search history, so that users can easily click on it to view its weather conditions again.
        // When a city in the search history is clicked, fetch its current and future weather data using the API, and display it on the dashboard as described in steps 3 and 4.