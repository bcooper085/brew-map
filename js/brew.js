var apiKey = require("./../.env").apiKey;

function BrewMap () {

}

var map;

function displayMap () {
  map = new google.maps.Map(document.getElementsById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

BrewMap.prototype.route = function(from, to) {
  $.get("https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap")
  .then(function(response) {

  });
}
