var map = L.map('map').
setView([37.185748, -3.610183],
15);

var mapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(map);

/*
map.addLayer(L.tileLayer);
*/

var googleLayer = new L.Google();
map.addLayer(googleLayer);

var googleRoadmapLayer = new L.Google('ROADMAP');
map.addLayer(googleRoadmapLayer);

var baseMaps = {
	'Google Roadmap' : googleRoadmapLayer,
	'Google' : googleLayer,
	'leaflet' : mapLayer
};


L.control.layers(baseMaps,null).addTo(map);

/*
L.control.scale().addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
*/
