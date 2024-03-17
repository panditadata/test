var map = L.map('map').setView([0, 0], 3);
var fullScreen = new L.Control.FullScreen(); 
map.addControl(fullScreen);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var flyIcon = L.Icon.extend({
    options: {
        iconSize: [50, 49] // size of the icon
    }
});

var helicopterIcon = new flyIcon({iconUrl: 'pilot-helicopter.gif'});
var large_airportIcon = new flyIcon({iconUrl: 'airplane-joypixels-flying.gif'});
var medium_airportIcon = new flyIcon({iconUrl: 'landing-touch-down-landing.gif'});
var small_airportIcon = new flyIcon({iconUrl: 'takeoff-plane with shadow.gif'});
var seaplane_baseIcon = new flyIcon({iconUrl: 'giphy.gif'});
var closedIcon = new flyIcon({iconUrl: 'closed airport.JPEG'});

var helicopterMarker = L.marker([40.07080078125, -74.9336013793945], {icon: helicopterIcon}).addTo(map);
helicopterMarker.bindPopup('Total Rf Heliport');

var small_airportMarker = L.marker([38.704022, -101.473911], {icon: small_airportIcon}).addTo(map);
small_airportMarker.bindPopup('Aero B Ranch Airport');

var small_airportMarker = L.marker([59.94919968, -151.695999146], {icon: small_airportIcon}).addTo(map);
another_small_airportMarker.bindPopup('Lowell Field');


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
