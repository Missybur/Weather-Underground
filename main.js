"use strict"

var apiUrl = "http://api.wunderground.com/api/e8a35632825173ad/";

$(document).ready(init);

function init(){
  $("#getWeather").click(getWeather);
  var url = "http://api.wunderground.com/api/e8a35632825173ad/geolookup/q/autoip.json"
  $.get(url)
  .done(function(data){
      console.log(data)
    var zip = data.location.zip

    var url2 = "http://api.wunderground.com/api/e8a35632825173ad/conditions/q/"+zip+".json"
    console.log(url2)

    var url3 = "http://api.wunderground.com/api/e8a35632825173ad/forecast/q/"+zip+".json"
    console.log(url2)

    $.get(url2)
    .done(function(data){
      console.log(data)
    var feels_like = data.current_observation.feelslike_string;
    $("#currentConditions").text(feels_like)
    var condition = data.current_observation.weather;
    $("#condition").text(condition)
    var humidity = data.current_observation.relative_humidity;
    $("#humidity").text(humidity)
    var weatherIcon = data.current_observation.icon_url;
    $("#weatherImage").attr("src", data.current_observation.icon_url);
    var windString = data.current_observation.wind_string;
    $("#windString").text(windString)
    })

    // $.get(url3)
    // .done(function(data){
    //   var forecast = data.simpleforecast.forecastday
    //   console.log(data)
    //   $("#forecast").text(forecast)
    // })

  })
  // $("#getCurrentForecast").click(getCurrentForecast);
}


function getWeather(){

  var zipcode = $("#zipcode").val();
  console.log(zipcode);
  var promise = "http://api.wunderground.com/api/e8a35632825173ad/conditions/q/" + zipcode + ".json"
  console.log(promise)


  $.get(promise)
    .done(function(data){
    console.log(data)
    var feels_like = data.current_observation.feelslike_string;
    $("#currentConditions").text(feels_like)
    var condition = data.current_observation.weather;
    $("#condition").text(condition)
     var humidity = data.current_observation.relative_humidity;
    $("#humidity").text(humidity)
    var weatherIcon = data.current_observation.icon_url;
    $("#weatherImage").attr("src", data.current_observation.icon_url);
    var windString = data.current_observation.wind_string;
    $("#windString").text(windString)


  })



}







//   var dailyForecast = apiUrl + "forecast/q/CA/San_Francisco.json";

//   $.get(url)
//   .done(function(data){
//     console.log(data.current_observation.display_location.full);
//   })

//   .fail(function(error){
//     console.error(error);
//   });

//   $.get(dailyForecast)
//   .done(function(data){
//     console.log(data.icon_url);
//   });



// function getWeather(event){
//   var zipcode = $("#zipcode").val();
//   console.log(zipcode);
//   var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/conditions/q/" + zipcode + ".json")


//   promise.success(function(data) {
//   var current_weather_forecast = (data.current_observation.weather);

//   $('#getWeather').text(currentForecast);
//   $('#current_weather_forecast').attr("src", data.current_observation.icon_url);
//   });
// }


// function get10DayForecast(){

// }