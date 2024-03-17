var mapOptions = {
    center: [2,2],
    zoom: 3,
    dragging: true,
    doubleClickZoom:true,
    
}
var map = new L.Map('map', mapOptions);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);


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
var closedIcon = new flyIcon({iconUrl: 'closed airport.JPEG'});

var helicopterMarker = L.marker([40.07080078125, -74.9336013793945], {icon: helicopterIcon}).addTo(map);
helicopterMarker.bindPopup('Total Rf Heliport');



// Fullscreen control

var fullScreen = new L.Control.FullScreen(); 
map.addControl(fullScreen);
// events are fired when entering or exiting fullscreen.
map.on('enterFullscreen', function () {
console.log('entered fullscreen');
});
map.on('exitFullscreen', function () {
console.log('exited fullscreen');
});
// you can also toggle fullscreen from map object
map.toggleFullscreen();