// Add GeoJSON data URL
jsonDataURL="https://raw.githubusercontent.com/susiexia/Mapping_Earthquakes/master/GeoJSON_resources/torontoNeighborhoods.json"


// create a light tile layer based on Leatlet by mapbox style API 
let street = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY});

    // create another tile layer for dark
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY});


let baseMaps = {
    "Streets": street,
    "satellite and Streets": satelliteStreets
}
// initialize a map object 
let mymap = L.map("mapid", {
            center:[43.7, -79.3],
            zoom: 11,
            layers:[satelliteStreets]
});


L.control.layers(baseMaps).addTo(mymap);

// Grabbing, parsing and add GeoJSON data(FeatureCollection) on map object
// turn each feature into a marker on the map using pointToLayer
d3.json(jsonDataURL).then((data) =>{
    L.geoJSON(data,{
        // add style on lineStrings
        style:{
            "color":"blue",
            "fillColor":"yellow",
            "weight":2 },
        onEachFeature: function (feature, layer) {
            return layer.bindPopup("<h2> Neighborhood: " +feature.properties.AREA_NAME+"</h2>")
        }
    }).addTo(mymap);
})
