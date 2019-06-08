/* mapSetup.js
 * A program which allows for the visualisation of point data in four ways using a leaflet map.
 * Allows the the visualisation of the data as individual points, clustered points, a choropleth map,
 * and a heatmap.
 * @author Joel Perren
 */

var debug = false;

/**
 * Defines the map and sets its default properties
 */
var mymap = L.map('mapid').setView([55.30, -1.66], 8);

/**
 * Defines a DivIcon for displaying markers
 */
var divIcon = L.divIcon();

/**
 * Defines the map baselayer
 */
var baseLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1Ijoiam9lbHBlcnJlbiIsImEiOiJjajBvNWhqaXowMDE0MzN0YWYwbmNuZnFyIn0.bAQXJHTEhMRmSoATQduhog'
});

// Global variables used in various functions
var pointMarkerLayer;
var pointClusterLayer;
var postcodeAreas;
var crimeHeat;

/**
 * Defines the legend and its properties
 */
var legend = L.control({position: 'bottomright'});

/**
 * Defines a style for the polygons in choropleth maps
 */
var polyStyle = {
        weight: 1,
        opacity: 1,
        color: '#bdbdbd',
        dashArray: '3',
        fillOpacity: 0.9
    }

/**
 * Function to set up the map, assign listeners and actions to the html buttons
 * and to plot the crime markers onto the map.
 */
function setup() {
    
    baseLayer.addTo(mymap);
    $('#clusterdiscussion, #choroplethdiscussion, #heatdiscussion').hide();
    
    $(document).ready(function(){
            
          var pointbutton = $("#pointbutton");
          var clusterbutton = $("#clusterbutton");
          var choroplethbutton = $("#choroplethbutton");
          var heatbutton = $("#heatbutton");
            
          var btnClick = function(e){
              if (e.currentTarget.id == "pointbutton") {
                  clearMap();
                  plotPoints();
                  $(".mapdiscussion:visible").hide();
                  $("#pointdiscussion").show();
              } else if (e.currentTarget.id == "clusterbutton") {
                  clearMap();
                  clusterPoints();
                  $(".mapdiscussion:visible").hide();
                  $("#clusterdiscussion").show();
              } else if (e.currentTarget.id == "choroplethbutton") {
                  clearMap();
                  addPolygons();
                  $(".mapdiscussion:visible").hide();
                  $("#choroplethdiscussion").show();
              } else if (e.currentTarget.id == "heatbutton") {
                  clearMap();
                  generateHeatmap();
                  $(".mapdiscussion:visible").hide();
                  $("#heatdiscussion").show();
              }
          }
    
          pointbutton.on('click', btnClick);
          clusterbutton.on('click', btnClick);
          choroplethbutton.on('click', btnClick);
          heatbutton.on('click', btnClick);  

    });
    
    plotPoints();
    
}

/**
 * Plots crime markers from crimeDamage.js onto the map. Assigns a popup to each point.
 * They are plotted as divIcons to improve performance given the large volume of data.
 */
function plotPoints() {
    
    if (typeof pointMarkerLayer !== 'undefined') {
        
        pointMarkerLayer.addTo(mymap);
        
    } else {
        
        pointMarkerLayer = new L.layerGroup();
    
        for (id in crimDamage) {
            var markerLocation = new L.LatLng(crimDamage[id].lat, crimDamage[id].lon);
            var marker = new L.Marker(markerLocation, {icon:divIcon});
            marker.bindPopup(crimDamage[id].outcome);
            pointMarkerLayer.addLayer(marker);
        }
    
        pointMarkerLayer.addTo(mymap);
        
    }
}

/**
 * Clusters the individual markers into marker clusters using the leaflet marker clusterer plugin.
 */
function clusterPoints() {
    
    if (typeof pointClusterLayer !== 'undefined') {
        
        pointClusterLayer.addTo(mymap);
        
    } else {
    
        pointClusterLayer = new L.markerClusterGroup();

        for (id in crimDamage) {
            var markerLocation = new L.LatLng(crimDamage[id].lat, crimDamage[id].lon);
            var marker = new L.Marker(markerLocation, {icon:divIcon});
            marker.bindPopup(crimDamage[id].outcome);
            pointClusterLayer.addLayer(marker);
        }

        pointClusterLayer.addTo(mymap);
    }
}

/* POLYGON AND CHOROPLETH MAP FUNCTIONS */
/**
 * Adds the 2012 Postcode District boundaries to the map and attaches the legend.
 */
function addPolygons() {
    
    if (typeof postcodeAreas !== 'undefined') {
        postcodeAreas.addTo(mymap);
        legend.addTo(mymap);
    } else {
        postcodeAreas = L.geoJSON(postcodeGeoJSON, {
            onEachFeature: onEachFeature,
        }).addTo(mymap);
        legend.addTo(mymap);
    }  
}

/**
 * Loops through each feature of a given layer, calls the getPIP() function, assigns each layer a popup,
 * sets the style, and assigns listeners for mouse events.
 * @param feature a geojson feature.
 * @param layer an indervidual layer from a feature.
 */
function onEachFeature(feature, layer){
    getPIP(feature, layer);
    layer.bindPopup(feature.properties.label +
              " crimes: " + feature.properties.crimes);
    layer.setStyle(style(feature));
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });

}

/**
 * Checks to see if a point is located within a given polygon.
 * @param feature a geojson feature.
 * @param layer an indervidual layer from a feature.
 */
function getPIP(feature, layer) {
    
    pointMarkerLayer.eachLayer(function(marker){
        if (isPIP(marker, layer)) {
            feature.properties.crimes++;
        }
    });
    
}

/**
 * Assigns a style of a given feature.
 * @param feature a polygon feature to be styled.
 * @returns the style partially based on the feature properties.
 */
function style(feature) {
    return {
        fillColor: getColor(feature.properties.crimes),
        weight: 1,
        opacity: 1,
        color: '#bdbdbd',
        dashArray: '3',
        fillOpacity: 0.9
    };
}

/**
 * Gets a colour from a given value.
 * @param {int} d a number.
 * @returns a colour based on a given value.
 */
function getColor(d) {
    return d > 99 ? '#7a0177' : //100+
           d > 74  ? '#ae017e' : //75-99
           d > 49  ? '#dd3497' : //50-74
           d > 23  ? '#f768a1' : //25-49
           d > 14  ? '#fa9fb5' : //15-24
           d > 9  ? '#fcc5c0' : //10-14
           d > 0    ? '#fde0dd' : //1-9
           d == 0   ? '#fff7f3' : //0
                     '#f0f0f0';
}

/**
 * Checks whether a given point falls within a given polygon.
 * Code by VitalyZ on StackOverflow (https://stackoverflow.com/questions/31790344/determine-if-a-point-reside-inside-a-leaflet-polygon)
 * @param marker a marker with lat and lng coordinates.
 * @param poly a polygon defined by a series of coordinates.
 * @returns a boolean based on whether the point is within the polygon or not.
 */
function isPIP(marker, poly) { //VitalyZ on StackOverflow (https://stackoverflow.com/questions/31790344/determine-if-a-point-reside-inside-a-leaflet-polygon)
    var inside = false;
    var x = marker.getLatLng().lat, y = marker.getLatLng().lng;
    
    for (var ii=0; ii<poly.getLatLngs().length; ii++){
        
        var polyPoints = poly.getLatLngs()[ii];
        
        for (var i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
            
            var xi = polyPoints[i].lat, yi = polyPoints[i].lng;
            var xj = polyPoints[j].lat, yj = polyPoints[j].lng;
            
            var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
    }
    
    return inside;
}

/**
 * Highlights a polyginal feature on mouse hover.
 * @param e the layer being hovered over.
 */
function highlightFeature(e) {
    var layer = e.target;
    
    layer.setStyle({
        weight: 2,
        color: '#737373',
        dashArray: '',
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

/**
 * Un-highlights a polyginal feature on mouse hover.
 * @param e the layer being un-hovered over.
 */
function resetHighlight(e) {
    e.target.setStyle(polyStyle);
}

legend.onAdd = function (mymap) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1, 10, 15, 25, 50, 75, 100],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i]) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

/* HEATMAP FUNCTIONS */
/**
 * Generates a heatmap from a list of coordinates using Leaflet.heat
 */
function generateHeatmap() {
    crimeHeat = L.heatLayer(crimePoints, {
        radius: 10,
        blur: 15,
        maxZoom: 10,
        gradient: {
            0.6: '#2b83ba', 
            0.7: '#abdda4', 
            0.8: '#ffffbf',
            0.9: '#fdae61',
            1.0: '#d7191c'
        }
    }).addTo(mymap);
}

/**
 * Clears all layers (except the baselayer) from the map.
 */
function clearMap() {
    mymap.eachLayer(function (layer) {
        if (layer != baseLayer) {
            mymap.removeLayer(layer);
        }
    });
    legend.remove(mymap);
}

