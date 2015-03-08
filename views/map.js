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

    $.ajax({
    type: 'GET',
    url: "/companies",
    success: function(data){
        for(i = 0, len= data.length; i < len; i++){
            console.log("asdfasdf!")
          // var newDiv=document.createElement('option');
          // code = data[i]["code"];
          // cityName = data[i]["name"]; 
          // $(newDiv).attr("value",code);
          // $(newDiv).append(cityName);
          // $(".region").append(newDiv);
        }  
    },
    statusCode: {
    401: function() {
       alert('bad request');
    }}});