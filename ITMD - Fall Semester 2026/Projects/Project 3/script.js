async function myMap() {
    const { Polyline } = await google.maps.importLibrary('maps');
    alert("Hello, welcome to Google Maps!");

    var element = document.getElementById("googleMap");

    var myLocation = new google.maps.LatLng(41.834953786600366, -87.6276088814821);

    var mapOptions = {
        center: myLocation,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER,
        }
    };

    var myMap = new google.maps.Map(element, mapOptions);

    var wishnickMarker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        title: "Wishnick Hall",
    });

    var wishnickContentString = "<h1>Wishnick Hall</h1><p>This is IIT's Wishnick Hall, one of the many academic buildings on campus. This is where I go for ITMD 361 for in-person class.</p>";

    var wishnickInfoWindow = new google.maps.InfoWindow({
        content: wishnickContentString,
    });

    google.maps.event.addListener(wishnickMarker, "click", function () {
        wishnickInfoWindow.open(myMap, wishnickMarker);
    });
    
    var hermannMarker = new google.maps.Marker({
        position: new google.maps.LatLng(41.835721179658485, -87.62830089141612),
        map: myMap,
        title: "Hermann Hall",
    });

    var hermannContentString = "<h1>Hermann Hall</h1><p>This is IIT's Hermann Hall, one of the many academic buildings on campus.</p><p>Hermann Hall is mainly used as an event hall.</p>";

    var hermannInfoWindow = new google.maps.InfoWindow({
        content: hermannContentString,
    });

    google.maps.event.addListener(hermannMarker, "click", function () {
        hermannInfoWindow.open(myMap, hermannMarker);
    });

    var rateFieldMarker = new google.maps.Marker({
        position: new google.maps.LatLng(41.82997908433759, -87.63370602553783),
        map: myMap,
        title: "Rate Field",
    });

    var rateFieldContentString = "<h1>Rate Field</h1><p>Rate Field is one of Chicago's baseball stadiums, this one mainly used by the Chicago White Sox.</p>";

    var rateFieldInfoWindow = new google.maps.InfoWindow({
        content: rateFieldContentString,
    });

    google.maps.event.addListener(rateFieldMarker, "click", function () {
        rateFieldInfoWindow.open(myMap, rateFieldMarker);
    });

    // Define the LatLng coordinates for the polygon's path.
    const chinatownTriangleCoords = [
        { lat: 41.85775875223391, lng: -87.63196221485228 },
        { lat: 41.84861653596747, lng: -87.64342061157252 },
        { lat: 41.84720992517796, lng: -87.62930146355394 },
        { lat: 41.85775875223391, lng: -87.63196221485228 },
    ];
    // Construct the polygon.
    const chinatownTriangle = new google.maps.Polygon({
        paths: chinatownTriangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });

    const iitToChinatownLineCoords = [
        { lat: 41.834953786600366, lng: -87.6276088814821 },
        { lat: 41.835127321749255, lng: -87.62656448246136 },
        { lat: 41.85284925057497, lng: -87.62715027346654 },
        { lat: 41.85288415721041, lng: -87.63488271443555 },
    ];
    const flightPath = new Polyline({
        path: iitToChinatownLineCoords,
        geodesic: true,
        strokeColor: '#f0ed1a',
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    chinatownTriangle.setMap(myMap);
    flightPath.setMap(myMap);
}

google.maps.event.addDomListener(window, "load", myMap);