//pseudo code:
//User types city into search bar and clicks search
var searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    var city = document.querySelector('#searchBar').value;
    console.log(city);



//Geocoding API use to convert city name to lat and lon
//var city = 'raleigh'
var date = moment().format("L");
var cityHeader = document.querySelector('#cityHeader');
var requestCoord = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+',US&limit=5&appid=19d4050be39e995449aeeac86b7e3bec'

fetch(requestCoord).then(function(responseOne){
   return responseOne.json();
})
.then(function(data){
   console.log(data);
   
   var cityLat = data[0].lat;
   var cityLon = data[0].lon;
   console.log(cityLat);
   console.log(cityLon);

    cityHeader.textContent = data[0].name + ' (' + date + ')';

//Weather API call is made using the lat and lon from search
 var requestWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat='+cityLat+'&lon='+cityLon+'&exclude=hourly,minutely&units=imperial&appid=19d4050be39e995449aeeac86b7e3bec'

 fetch(requestWeather).then(function(responseTwo){
    return responseTwo.json();
 })
 .then(function(data){
    console.log(data);

//header icon
    var todayWeatherIcon = document.createElement('img');
    todayWeatherIcon.src = 'http://openweathermap.org/img/wn/'+data.current.weather[0].icon+'@2x.png';
    cityHeader.append(todayWeatherIcon);


// weather dispaly for jumbotron/ today
    var temp = document.querySelector('#temp');
    temp.textContent = 'Temp: ' + data.current.temp + '°F';
   
    var wind = document.querySelector('#wind');
    wind.textContent = 'Wind: ' + data.current.wind_speed + ' MPH';

    var humidity = document.querySelector('#humidity');
    humidity.textContent = 'Humidity: ' + data.current.humidity + ' %';

    var uvIndex = document.querySelector('#uvIndex');
    uvIndex.textContent = 'UV Index: ' + data.current.uvi;

// Weather display for 5-day forcast
    // for(var i = 0; i < 5; i++ ){
    //     var dailyData = data.daily[i]; 
        
    //     var nextDate = moment().add([i+1],'days').format("L");
    //     console.log(nextDate);
    // } 
  
//Day 1 of 5-day forcast generator
    var dayOne = document.querySelector('#dayOne');
    dayOne.textContent = moment().add(1,'days').format("L");

    var weatherIcon = document.createElement('img');
    weatherIcon.src = 'http://openweathermap.org/img/wn/'+data.daily[0].weather[0].icon+'@2x.png'
    dayOne.append(weatherIcon);

    var tempOne = document.querySelector('#tempOne');
    tempOne.textContent = 'Temp: ' + data.daily[0].temp.max + '°F';

    var windOne = document.querySelector('#windOne');
    windOne.textContent = 'Wind: ' + data.daily[0].wind_speed + ' MPH';   

    var humidityOne = document.querySelector('#humidityOne');
    humidityOne.textContent = 'Humidity: ' + data.daily[0].humidity + ' %';

//Day 2 of 5-day forcast generator
    var dayTwo = document.querySelector('#dayTwo');
    dayTwo.textContent = moment().add(2,'days').format("L");

    var weatherIconTwo = document.createElement('img');
    weatherIconTwo.src = 'http://openweathermap.org/img/wn/'+data.daily[1].weather[0].icon+'@2x.png'
    dayTwo.appendChild(weatherIconTwo);

    var tempTwo = document.querySelector('#tempTwo');
    tempTwo.textContent = 'Temp: ' + data.daily[1].temp.max + '°F';

    var windTwo = document.querySelector('#windTwo');
    windTwo.textContent = 'Wind: ' + data.daily[1].wind_speed + ' MPH';   

    var humidityTwo = document.querySelector('#humidityTwo');
    humidityTwo.textContent = 'Humidity: ' + data.daily[1].humidity + ' %';

    //Day 3 of 5-day forcast generator
    var dayThree = document.querySelector('#dayThree');
    dayThree.textContent = moment().add(3,'days').format("L");

    var weatherIconThree = document.createElement('img');
    weatherIconThree.src = 'http://openweathermap.org/img/wn/'+data.daily[2].weather[0].icon+'@2x.png'
    dayThree.appendChild(weatherIconThree);

    var tempThree = document.querySelector('#tempThree');
    tempThree.textContent = 'Temp: ' + data.daily[2].temp.max + '°F';

    var windThree = document.querySelector('#windThree');
    windThree.textContent = 'Wind: ' + data.daily[2].wind_speed + ' MPH';   

    var humidityThree = document.querySelector('#humidityThree');
    humidityThree.textContent = 'Humidity: ' + data.daily[2].humidity + ' %';
    
    //Day 4 of 5-day forcast generator
    var dayFour = document.querySelector('#dayFour');
    dayFour.textContent = moment().add(4,'days').format("L");

    var weatherIconFour = document.createElement('img');
    weatherIconFour.src = 'http://openweathermap.org/img/wn/'+data.daily[3].weather[0].icon+'@2x.png'
    dayFour.appendChild(weatherIconFour);

    var tempFour = document.querySelector('#tempFour');
    tempFour.textContent = 'Temp: ' + data.daily[3].temp.max + '°F';

    var windFour = document.querySelector('#windFour');
    windFour.textContent = 'Wind: ' + data.daily[3].wind_speed + ' MPH';   

    var humidityFour = document.querySelector('#humidityFour');
    humidityFour.textContent = 'Humidity: ' + data.daily[3].humidity + ' %';

   //Day 5 of 5-day forcast generator
   var dayFive = document.querySelector('#dayFive');
   dayFive.textContent = moment().add(5,'days').format("L");

   var weatherIconFive = document.createElement('img');
   weatherIconFive.src = 'http://openweathermap.org/img/wn/'+data.daily[4].weather[0].icon+'@2x.png'
   dayFive.appendChild(weatherIconFive);

   var tempFive = document.querySelector('#tempFive');
   tempFive.textContent = 'Temp: ' + data.daily[4].temp.max + '°F';

   var windFive = document.querySelector('#windFive');
   windFive.textContent = 'Wind: ' + data.daily[4].wind_speed + ' MPH';   

   var humidityFive = document.querySelector('#humidityFive');
   humidityFive.textContent = 'Humidity: ' + data.daily[4].humidity + ' %'; 
 })
 
})
})
