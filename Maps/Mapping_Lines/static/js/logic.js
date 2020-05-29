// initialize a map object and set up a center and zoom level
let mymap = L.map("mapid").setView([36.1733, -120.1794], 5);


// add an airline routes
//coordinates for each point to be used in polyline method
let line = [  [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]];

//create a polylione using the line coordinates and color red
L.polyline(line,{
             color:"red",
             weight:4,
             dashArray:"4",  // stroke dash pattern
             color:"blue",  // stroke 
             opcity:"0.5"   // stroke 

}).addTo(mymap);

// create a street tile layer based on Leatlet by mapbox style API 

let streetsTile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY});

// add 'greymap' tile layer to map object
streetsTile.addTo(mymap);