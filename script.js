var apiKey = "6aacd4e14f52b3aee51cd75e8426313c";
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + apiKey;

var date = moment().format('L')
console.log(date);
var searchBtn = $('#search-button');
var currentCard= $('#current-card');
var cardHeader = $('#card-header');
var temp = $('#temp');

//city event to get city from input value

searchBtn.on('click', function (e) {
    e.preventDefault();
    var city = $('#city-input').val();
    console.log(city);
    getCurrentForecast(city);
})


function getCurrentForecast(searchedCity) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey + "&units=imperial")
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data);
            cardHeader.text(data.name + '(' + date +')');
            temp.text(data.main.temp + "F");
            //start here
        })
}
