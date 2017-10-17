var map = L.map('map').
setView([37.185748, -3.610183],
15
);

var mapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 24
}).addTo(map);




L.control.scale().addTo(map);

map.locate({setView: true, maxZoom: 15});

	function onLocationFound(e) {

		L.marker(e.latlng).addTo(map);

		var circle = L.circle([37.185748,-3.610183], {
    			color: 'red',
			    fillColor: '#f03',
		    fillOpacity: 0.5,
		    radius: 500
		}).addTo(map);
		
	}

map.on('locationfound', onLocationFound);


