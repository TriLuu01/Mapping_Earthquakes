// Add GeoJSON data URL
jsonDataURL="https://raw.githubusercontent.com/susiexia/Mapping_Earthquakes/master/GeoJSON_resources/majorAirports.json"


// create a street tile layer based on Leatlet by mapbox style API 
let streetsTile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY});

    // create another tile layer for dark
let darkTile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY});


// group two tileLayers into a base layer that hold both maps, by using simple object
let baseMaps = {
            "Streets": streetsTile,
            "Dark_Mode": darkTile
};



// initialize a map object and set up  layers, center AND zoom level
let mymap = L.map("mapid", {
                    center: [30,30],
                    zoom: 3,
                    layers:[streetsTile]
});


// use control.layers() method add baselayers and overlays to map object
L.control.layers(baseMaps).addTo(mymap);

// Grabbing, parsing and add GeoJSON data(FeatureCollection) on map object
// turn each feature into a marker on the map using pointToLayer
d3.json(jsonDataURL).then((data) =>{
    L.geoJSON(data,{
        pointToLayer: function (feature, latlng) {
            console.log(feature);
            return L.marker(latlng).bindPopup("<h2> Airport code: " +feature.properties.faa+"</h2><hr><h3> Airport name: "+ feature.properties.name +"</h3>")
        }
    }).addTo(mymap);
})


