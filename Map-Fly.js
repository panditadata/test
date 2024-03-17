var mapOptions = {
    center: [2,2],
    zoom: 3,
    dragging: true,
    doubleClickZoom:true,
    boxZoom:true
}

var map = new L.Map('map', mapOptions);
var fullScreen = new L.Control.FullScreen(); 
map.addControl(fullScreen);
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);
var flyIcon = L.Icon.extend({
options: {
   

    iconSize:     [50, 49] // size of the icon]
}
});

var helicopterIcon = new flyIconIcon({iconUrl: 'pilot-helicopter.gif'}),
    redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

L.marker([51.5, -0.09], {iconUrl: helicopterIcon}).addTo(map);

// events are fired when entering or exiting fullscreen.
map.on('enterFullscreen', function () {
console.log('entered fullscreen');
});

map.on('exitFullscreen', function () {
console.log('exited fullscreen');
});

// you can also toggle fullscreen from map object
map.toggleFullscreen();

