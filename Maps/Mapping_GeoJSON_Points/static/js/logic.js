// Add GeoJSON data a FeatureCollection object that has properties and geometry for SFO.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};



// initialize a map object and set up a center and zoom level
let mymap = L.map("mapid").setView([37.5, -122.5], 10);

// Grabbing and add GeoJSON data(FeatureCollection) on map object
// turn each feature into a marker on the map using pointToLayer

L.geoJSON(sanFranAirport,{
   pointToLayer: function (feature, latlng) {
        console.log(feature);
        return L.marker(latlng).bindPopup("<h2> Airport code: " +feature.properties.faa+"</h2><hr><h3> Airport name: "+ feature.properties.name +"</h3>")
    }
}
    ).addTo(mymap);

// turn each feature into a popup on the map using onEachFeature
//L.geoJSON(sanFranAirport, {
        //onEachFeature: function (feature, layer) {
            //console.log(layer);
            //layer.bindPopup("<h2> Airport code: " +feature.properties.faa+
                        //"</h2><hr><h3> Airport name: "+ feature.properties.name +"</h3>")
        //}}).addTo(mymap);




// create a street tile layer based on Leatlet by mapbox style API 

let streetsTile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY});

// add 'greymap' tile layer to map object
streetsTile.addTo(mymap);