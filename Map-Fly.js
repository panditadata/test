var mapOptions = {
    center: [20,-91.83],
    zoom: 4,
    dragging: true,
    doubleClickZoom:true,
    
}
var map = new L.Map('map', mapOptions);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);
var fullScreen = new L.Control.FullScreen(); 
map.addControl(fullScreen);

var flyIcon = L.Icon.extend({
    options: {
        iconSize: [45, 42] // size of the icon
    }
});

var helicopterIcon = new flyIcon({iconUrl: 'pilot-helicopter.gif'});
var large_airportIcon = new flyIcon({iconUrl: 'airplane-joypixels-flying.gif'});
var medium_airportIcon = new flyIcon({iconUrl: 'landing-touch-down-landing.gif'});
var small_airportIcon = new flyIcon({iconUrl: 'takeoff-plane with shadow.gif'});
var seaplane_baseIcon = new flyIcon({iconUrl: 'giphy.gif'});
var closedIcon = new flyIcon({iconUrl: 'closed airport.jpeg'});

var helicopterMarker = L.marker([40.07080078125, -74.9336013793945], {icon: helicopterIcon}).addTo(map);
helicopterMarker.bindPopup('Total Rf Heliport');

var small_airportMarker = L.marker([38.704022, -101.473911], {icon: small_airportIcon}).addTo(map);
small_airportMarker.bindPopup('Aero B Ranch Airport');

var another_small_airportMarker = L.marker([59.94919968, -151.695999146], {icon: small_airportIcon}).addTo(map);
another_small_airportMarker.bindPopup('Lowell Field');

var another1_small_airportIcon = L.marker([40.9305992126464, -77.738899230957], {icon: small_airportIcon}).addTo(map);
another1_small_airportIcon.bindPopup('Bierly(Personal Use) Airport');

var another2_small_airportIcon = L.marker([34.8647994995117, -86.7703018188476], {icon: small_airportIcon}).addTo(map);
another2_small_airportIcon.bindPopup('Epps Airpark');

var closedIcon = L.marker([35.6087, -91.254898], {icon: closedIcon}).addTo(map);
closedIcon.bindPopup('Newport Hospital & Clinic Heliport');

var large_airportIcon = L.marker([-9.44338035583496, 147.220001220703], {icon: large_airportIcon}).addTo(map);
large_airportIcon.bindPopup('Halifax / Stanfield International Airport');

var another3_large_airportIcon = L.marker([44.88079834	-63.50859833], {icon: large_airportIcon}).addTo(map);
another3_large_airportIcon.bindPopup('Port Moresby Jacksons International Airport');

var another1_large_airportIcon = L.marker([45.32249832	-75.66919708], {icon: large_airportIcon}).addTo(map);
another1_large_airportIcon.bindPopup('Ottawa Macdonald-Cartier International Airport');


var another_helicopterIcon = L.marker([32.7273736, -116.4597417], {icon: helicopterIcon}).addTo(map);
another_helicopterIcon.bindPopup('Kitchen Creek Helibase Heliport');

var another_closedIcon = L.marker([40.622202, -104.344002], {icon: closedIcon}).addTo(map);
another_closedIcon.bindPopup('Cass Field');

// Fullscreen control


// events are fired when entering or exiting fullscreen.
map.on('enterFullscreen', function () {
console.log('entered fullscreen');
});
map.on('exitFullscreen', function () {
console.log('exited fullscreen');
});
// you can also toggle fullscreen from map object
map.toggleFullscreen();
