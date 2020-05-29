// initialize a map object and set up a center and zoom level
let mymap = L.map("mapid").setView([40.7, -94.5], 4);

// create a street tile layer based on Leatlet by mapbox style API 

let streetsTile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY});

// add 'greymap' tile layer to map object
streetsTile.addTo(mymap);

//----------------------------OPTION 2----------------------------------------------
// use mapbox tiles API

//let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//maxZoom: 18,
//id: 'mapbox.streets',  
//accessToken: API_KEY});


//--------------------------id choices---------------------------------
//mapbox://styles/mapbox/streets-v11
//mapbox://styles/mapbox/outdoors-v11
//mapbox://styles/mapbox/light-v10
//mapbox://styles/mapbox/dark-v10
//mapbox://styles/mapbox/satellite-v9
//mapbox://styles/mapbox/satellite-streets-v11
//mapbox://styles/mapbox/navigation-preview-day-v4
//mapbox://styles/mapbox/navigation-preview-night-v4
//mapbox://styles/mapbox/navigation-guidance-day-v4
//mapbox://styles/mapbox/navigation-guidance-night-v4