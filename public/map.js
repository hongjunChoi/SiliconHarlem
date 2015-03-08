var map;
var array; 
var len;
$.get('/companies', function(result){
    len = result.length;
    array = new Array(result.length);
    for(var i = 0; i < result.length; i++){
        array[i] = new Array(2);
        console.log(result[address]);
        array[i][0] = result.address.latitude;
        array[i][1] = result.address.longitude;
    }
});

function initialize(){
	var mapOptions = {
		zoom: 11, 
		center: new google.maps.LatLng(40.85, -73.9)   
	 }
	
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var myLatlng;

    $.get('/companies', function(data) {
        for(var i = 0; i < len; i++) {
            myLatlng = new google.maps.LatLng(array[i][0], array[i][1]);
            var marker = new google.maps.Marker({
                position: myLatlng, 
                map: map,
                title: data.name
            });
        }
    });
}


google.maps.event.addDomListener(window, "load", initialize);