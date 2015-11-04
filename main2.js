'use strict';

$(document).ready(init);

function init() {
  $('#go').click(goClicked);
  // $('#getLocalWeatherForecast').click(go);
  $('#threeDayLowForecast').click(get3DayWeatherForecast);
  $('#threeDayHiForecast').click(get3DayWeatherForecast);
  $('#webcam').click(getWebcam);
  // $('#weatherCondition').click(weatherCondition);
};

var results;

//   function getLocation(e) {
//     var promise= $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/geolookup/q/autoip.json");
//     // var promise2 = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/geolookup/q/" + city + ".json");

//     var city = data.location.city;

//     promise.success(function(data) {
//     // console.log('success data:', data);
//   });
// }

// function getLocalWeatherForecast(event){
//   var promise = $.getJSON("")
// }

function goClicked(event){
  var zipcode = $("#inputCurrentForecast").val();
  console.log(zipcode);
  var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/conditions/q/" + zipcode + ".json")


  promise.success(function(data) {
  var currentForecast = (data.current_observation.weather);

  $('#go').text(currentForecast);
  $('#mainImage').attr("src", data.current_observation.icon_url);
  });
}

function getWebcam(event) {
  var zipcode = $("#inputCurrentForecast").val();
  console.log(zipcode);
  var promise = $.getJSON('http://api.wunderground.com/api/eadf1ca63ecac737/webcams/q/CA/San_Francisco.json');


  promise.success(function(data) {
      console.log('success data:', data.webcams[0].CURRENTIMAGEURL);

    var webcam = (data.webcams[0].CURRENTIMAGEURL);
    console.log(webcam);

  $('#mainImage').attr("src", data.webcams[0].CURRENTIMAGEURL);
  })
}

// function weatherCondition(e) {
//   var promise1 = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/conditions/q/CA/San_Francisco.json")

//   promise.success(function(data) {
//     console.log('success data:', data.current_observation.icon);

//     // var weatherCondition = data.conditions.imag
//     console.log(weatherCondition);

//     // $('#go').text()
//     //   });

//     // var weatherConditionForecast = data.forecast.
//   })
// }

function get3DayWeatherForecast(e) {
    // var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/forecast/q/"+ city + ".json");

    var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/forecast/q/CA/San_Francisco.json");

    promise.success(function(data) {
      console.log('success data:', data);

      var threeDayForecast = data.forecast.simpleforecast.forecastday
      threeDayForecast.forEach(function(d){
        var lowFar = d.low.fahrenheit;
        var lowFarLen = lowFar.length;
        // console.log((lowFar).length);
        var lowFarAvg = lowFar / lowFarLen;
        // console.log(lowFarAvg);

        var highFar = d.high.fahrenheit
        // console.log(highFar);
        var highFarLen = highFar.length;
        // console.log(highFarLen);
        var highFarAvg = highFar / highFarLen;

        console.log(highFarAvg);

    $('#threeDayLowForecast').text(lowFarAvg)
    var lowFarAvg = lowFar / lowFarLen;
    console.log(highFarAvg);

    $('#threeDayHiForecast').text(highFarAvg)
      });

  });


var threeDayForecast = data.forecast.simpleforecast.forecastday
console.log(threeDayForecast);
}

// function goClicked(event){
//     // var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/history_19500802/q/CA/San_Francisco.json");
//     // var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/history_19501220/q/CA/Los_Angeles.json");
//     var promise = $.getJSON("http://api.wunderground.com/api/eadf1ca63ecac737/webcams/q/CA/Los_Angeles.json");

//   promise.success(function(data) {
//   console.log('success data:', data);












