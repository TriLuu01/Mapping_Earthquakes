// Add GeoJSON data URL of USGS PAST 7 DAYS earthquake 
jsonDataURL="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


// create a street tile layer based on Leatlet by mapbox style API 
let street = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY});

// create another tile layer for satellite
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY});


let baseMaps = {
    "Streets": street,
    "Satellite": satelliteStreets
}
// initialize a map object 
let mymap = L.map("mapid", {
            center:[39.5,-98.5],
            zoom: 3,
            layers:[street]
});


L.control.layers(baseMaps).addTo(mymap);

// Grabbing, parsing and add GeoJSON data(FeatureCollection) on map object
// turn each feature into a marker on the map using pointToLayer
d3.json(jsonDataURL).then((data) =>{
    L.geoJSON(data,{
        pointToLayer: function (feature, latlng) {
            
            return L.marker(latlng).bindPopup("<h2> Earthquake Magnitude: " +feature.properties.mag+"</h2><hr><h3> Location: "+ feature.properties.place +"</h3>")
        }
    }).addTo(mymap);
})
// turn each feature into a popup on the map using onEachFeature
//L.geoJSON(sanFranAirport, {
        //onEachFeature: function (feature, layer) {
            //console.log(layer);
            //layer.bindPopup("<h2> Airport code: " +feature.properties.faa+
                        //"</h2><hr><h3> Airport name: "+ feature.properties.name +"</h3>")
        //}}).addTo(mymap);


