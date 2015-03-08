var map;
var array; 
$.get('/companies', function(result){
  array = new Array(result.length);
  for(var i = 0; i < result.length; i++){
    array[i] = new Array(2);
    array[i][0] = result[i].address.latitude;
    array[i][1] = result[i].address.longitude;
    }
});
var styles = [
  {
    stylers: [
      { hue: "#E6E6E6" },
      { saturation: 0 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];
function initialize(){
	var mapOptions = {
		zoom: 14, 
		center: new google.maps.LatLng(40.815892, -73.949634),
		draggable: true,
		styles: styles,
		minZoom: 14
	};

	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	var myLatlng;
	$.get('/companies', function(data) {
    for(var i = 0; i < data.length; i++) {
      myLatlng = new google.maps.LatLng(array[i][0], array[i][1]);
      var marker = new google.maps.Marker({
          position: myLatlng, 
          map: map,
          title: data[i].name
      });
      google.maps.event.addListener(marker, 'dblclick', function() {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
      });
    }
  });

    
}

google.maps.event.addDomListener(window, "load", initialize());