# Mapping_Earthquakes

--------------------------------------------------

Traverse and retrieve GeoJSON data to populate an interactive geographical map about earthquakes and tectonic plates using JavaScript,leaflet.js libraries as well as Mapbox API.

### Project Purpose

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days. And to illustrate
the relationship between tectonic plates and the location, frequency of seismic activity.

### Project Approach

- Use the JavaScript ES6 and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data.

- Use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

### Project Process

- Retrieve data from a GeoJSON file. *Tool: D3.json method for API*

- Make API requests to a server to host geographical maps. *Tool: Mapbox API, Leaflet*

- Populate geographical maps with GeoJSON data. *Tool: JavaScript and the Data-Driven Documents (D3) library*

- Add multiple map layers to maps. *Tool: Leaflet control plugins*

- Add legend control and layer control as well as popup circleMarker based on magnitude level. *Tool: Leaflet control plugins to add user interface controls.*

- Use JavaScript ES6 functions to add GeoJSON data, features, and interactivity to maps.

- Render maps on a server and deploy on GitHub Pages.

## Codes

- [HTML File](/Earthquake_Challenge/index.html)

- [JavaScript File](/Earthquake_Challenge/static/js/logic.js)

- [CSS File](/Earthquake_Challenge/static/css/style.css)


**Map Description:**

1. Each earthquake will be visually represented by a circle and color, where a higher magnitude will have a larger diameter and will be darker in color. There are more color information in legend, which is in the right bottom of page.

2. Each earthquake and each lineString of tectonic plates boundary will have a popup marker that, when clicked, will show the information.

3. On the upper right side of map, a layer control would allow users change from different map styles(Street Mode, Satellite-Street Mode, Light Mode), and allow users to control which overlays (Earthquake cirle markers, Tectonic plates)they see on map. 

--------------------------------------------------

![challenge_Result.PNG](/challenge_Result.PNG)

--------------------------------------------------
