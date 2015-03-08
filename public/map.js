var map;
var array; 
console.log('1111111111111111');
$.get('/companies', function(result){
console.log('22222222222222222222');
  array = new Array(result.length);
  for(var i = 0; i < result.length; i++){
    array[i] = new Array(2);
    array[i][0] = result[i].address.latitude;
    array[i][1] = result[i].address.longitude;
    }
});
console.log('33333333333333333');
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
console.log('4444444444444444444');
function initialize(){
	var mapOptions = {
		zoom: 14, 
		center: new google.maps.LatLng(40.815892, -73.949634),
		draggable: true,
		styles: styles,
		minZoom: 14
	};

  console.log('8888888888888888');
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

console.log('!!!!!!!!!!!!!!!!!!!!!');
google.maps.event.addDomListener(window, "load", initialize());
console.log('????????????????????');