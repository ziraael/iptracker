var mymap =L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJpbW1hbG9rdSIsImEiOiJja2hmZGRubzMwYW13MnNxcDdlNHA3aDV1In0.9VMBWDL7WXFGeNgeHM4XWw'
}).addTo(mymap);

// custom icon
var myIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize: [38, 45],
    iconAnchor: [21, 75],
    popupAnchor: [-3, -76],
});

var marker = L.marker([51.5, -0.09], {icon: myIcon}).addTo(mymap);
marker.bindPopup("<b>Youre here!</b><br>I am a popup.").openPopup();