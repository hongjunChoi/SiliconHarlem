var map;

function initialize(){
	var mapOptions = {
		zoom: 7, 
		center: new google.maps.LatLng(40, -74)   
	 }

	 map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

google.maps.event.addDomListener(window, "load", initialize);