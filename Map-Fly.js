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
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var helicopterIcon = L.Icon.extend({
options: {
    iconUrl: 'pilot-helicopter.gif',

    iconSize:     [50, 49], // size of the icon

    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location

    popupAnchor:  [-3, -76]
}
});

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

