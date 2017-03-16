// var apiKey = require("./../.env").apiKey;
//
function BrewMap () {

}

var word = "hello";
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

exports.brewMapModule = BrewMap;
exports.initMap = initMap;
exports.map = map;
