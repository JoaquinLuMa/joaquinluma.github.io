function myMap() {
    alert("Hello, welcome to my map!");

    var element = document.getElementById("googleMap");

    var myLocation = new google.maps.LatLng(41.835117, -87.627130);

    var mapOptions = {
        center: myLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER,
        }
    };

    var myMap = new google.maps.Map(element, mapOptions);

    var marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        title: "My Location",
    });

    var contentString = "<h1>My Location</h1><p>This is where I am located.</p>";

    var infoWindow = new google.maps.InfoWindow({
        content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
        infoWindow.open(myMap, marker);
    });
    
}

googlw.maps.event.addDomListener(window, "load", myMap);