var map;

function initialize(){
	var mapOptions = {
		zoom: 11, 
		center: new google.maps.LatLng(40.85, -73.9)   
	 }
		// var marker = new google.maps.Marker({
	 //      position: myLatlng,
	 //      map: map,
	 //    title: 'Hello World!'
	 // 	});
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

google.maps.event.addDomListener(window, "load", initialize);

$.get('/companies', function(data) {
  console.log(data);
});