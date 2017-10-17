var map = L.map('map').
setView([37.185748, -3.610183],
15
);

var mapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 6
}).addTo(map);



/*var googleLayer = new L.Google();
map.addLayer(googleLayer);

var googleRoadmapLayer = new L.Google('ROADMAP');
map.addLayer(googleRoadmapLayer);

var baseMaps = {
	'Google Roadmap' : googleRoadmapLayer,
	'Google' : googleLayer,
	'leaflet' : mapLayer
};
*/

/*
L.control.layers(baseMaps,null).addTo(map);
*/

L.control.scale().addTo(map);

map.locate({setView: true, maxZoom: 15});

	function onLocationFound(e) {

		L.marker(e.latlng).addTo(map);
	}

map.on('locationfound', onLocationFound);


