// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require spree
//= require spree/frontend/cart


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.4215, lng: -75.6972},
    zoom: 12
  });

  var location_1_info = "<b>Location 1</b>110 Laurier Ave W<br/>Ottawa, ON K1P 1J1, Canada"

  var location_1_infowindow = new google.maps.InfoWindow({
    content: location_1_info
  });

  var location_1 = new google.maps.Marker({
    position: {lat: 45.4204, lng: -75.6896},
    map: map,
    title: "Location 1"
  });

  location_1.addListener('click', function() {
    location_1_infowindow.open(map,location_1);
  })

  var location_2_info = "<b>Location 2</b><br/>380 Sussex Dr<br/> Ottawa, ON K1N 9N4, Canada"

  var location_2_infowindow = new google.maps.InfoWindow({
    content: location_2_info
  });

  var location_2 = new google.maps.Marker({
    position: {lat: 45.4295, lng: -75.6989},
    map: map,
    title: "Location 2"
  });

  location_2.addListener('click', function() {
    location_2_infowindow.open(map,location_2);
  });

  var location_3_info = "<b>Location 3</b><br/>100 Laurier St, Gatineau<br/> QC K1A 0M8, Canada"

  var location_3_infowindow = new google.maps.InfoWindow({
    content: location_3_info
  });

  var location_3 = new google.maps.Marker({
    position: {lat: 45.4302, lng: -75.7092},
    map: map,
    title: "Location 3"
  });

  location_3.addListener('click', function() {
    location_3_infowindow.open(map,location_3);
  });

}
