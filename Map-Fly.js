var mapOptions = {
    center: [20,-91.83],
    zoom: 4,
    dragging: true,
    doubleClickZoom:true,
    scrollWheelZoom: true,
    fullscreenControl: true,
    zoomAnimation: true,
    markerZoomAnimation: true,
}
var mapId = new L.Map('mapId', mapOptions);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mapId);


var flyIcon = L.Icon.extend({
    options: {
        iconSize: [35, 32] // size of the icon
    }
});

var helicopterIcon = new flyIcon({iconUrl: 'pilot-helicopter.gif'});
var large_airportIcon = new flyIcon({iconUrl: 'airplane-joypixels-flying.gif'});
var medium_airportIcon = new flyIcon({iconUrl: 'landing-touch-down-landing.gif'});
var small_airportIcon = new flyIcon({iconUrl: 'takeoff-plane with shadow.gif'});
var seaplane_baseIcon = new flyIcon({iconUrl: 'giphy.gif'});
var closedIcon = new flyIcon({iconUrl: 'closed airport.JPEG'});

var helicopterMarker = L.marker([40.07080078125, -74.9336013793945], {icon: helicopterIcon}).addTo(mapId);
helicopterMarker.bindPopup('Total Rf Heliport');
helicopterMarker.on('mouseover', function (e) {
this.openPopup();
});
helicopterMarker.on('mouseout', function (e) {
this.closePopup();
});
helicopterMarker.dragging.enable();

var small_airportMarker = L.marker([38.704022, -101.473911], {icon: small_airportIcon}).addTo(mapId);
small_airportMarker.bindPopup('Aero B Ranch Airport');

var another_small_airportMarker = L.marker([59.94919968, -151.695999146], {icon: small_airportIcon}).addTo(mapId);
another_small_airportMarker.bindPopup('Lowell Field');

var another1_small_airportIcon = L.marker([40.9305992126464, -77.738899230957], {icon: small_airportIcon}).addTo(mapId);
another1_small_airportIcon.bindPopup('Bierly(Personal Use) Airport');

var another2_small_airportIcon = L.marker([34.8647994995117, -86.7703018188476], {icon: small_airportIcon}).addTo(mapId);
another2_small_airportIcon.bindPopup('Epps Airpark');

var closedMarker = L.marker([35.6087, -91.254898], {icon: closedIcon}).addTo(mapId);
closedMarker.bindPopup('Newport Hospital & Clinic Heliport');

var large_airportIcon = L.marker([-9.44338035583496, 147.220001220703], {icon: large_airportIcon}).addTo(mapId);
large_airportIcon.bindPopup('Port Moresby Jacksons International Airport');


var another_helicopterIcon = L.marker([32.7273736, -116.4597417], {icon: helicopterIcon}).addTo(mapId);
another_helicopterIcon.bindPopup('Kitchen Creek Helibase Heliport');

another_helicopterIcon.on('mouseover', function (e) {
this.openPopup();
});
another_helicopterIcon.on('mouseout', function (e) {
this.closePopup();
});
another_helicopterIcon.dragging.enable();

var another_closedIcon = L.marker([40.622202, -104.344002], {icon: closedIcon}).addTo(mapId);
another_closedIcon.bindPopup('Cass Field');

