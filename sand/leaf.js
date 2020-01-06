var map = L.map( 'map', {
  center: [0.0, 5.0],
  minZoom: 1,
  zoom: 2
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

var myURL = jQuery( 'script[src$="leaf.js"]' ).attr( 'src' ).replace('leaf.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup({maxClusterRadius:15});

for ( var i = 0; i < markers.length; ++i )
{
  var popup = '<b><a href="#' +  markers[i].Id + '">' + markers[i].Name + '</a></b>' + '</b><br/>' + markers[i].Location;
    
  var m = L.marker( [markers[i].Latitude, markers[i].Longitude], {icon: myIcon} )
                  .bindPopup( popup );

  markerClusters.addLayer( m );
}

map.addLayer( markerClusters );
