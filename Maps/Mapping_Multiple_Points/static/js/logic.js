// An array of 5 data objects 
let citiesData = cities;


// initialize a map object and set up a center and zoom level
let mymap = L.map("mapid").setView([37.33, -121.88], 4);


// loop through the cities array and create a marker for each city to map
//citiesData.forEach((city)=>{
    //L.marker(city.location).bindPopup("<h2>"+ city.city+", "+ city.state+"</h2><hr><h3> Population: "+
                                    //city.population.toLocaleString()+"</h3>")
    
    //.addTo(mymap);});



// create circle markers and radiuses are based on population
citiesData.forEach((city)=>{
    L.circleMarker(city.location,{
                        radius:city.population/100000,
                        fillColor: "#015c92"

    }).bindPopup("<h2>"+ city.city+", "+ city.state+"</h2><hr><h3> Population: "+
                                    city.population.toLocaleString()+"</h3>")
    
    .addTo(mymap);});



// create a street tile layer based on Leatlet by mapbox style API 

let streetsTile = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY});

// add 'greymap' tile layer to map object
streetsTile.addTo(mymap);