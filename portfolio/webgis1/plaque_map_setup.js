var map; //The map object
var markers = []; //Holds the markers for marker clustering
var prevInfoWindow;
var infowindow;
var myCentreLat = 53.826679;
var myCentreLng = -1.531273;
var initialZoom = 11;

//When called, closes the last info window and opens a new one whilst updating the prevInfoWindow variable.
function infoCallback(infowindow, marker) {
	return function() {
		closeLastInfoWindow();
		infowindow.open(map, marker);
		prevInfoWindow = infowindow;
	};
}

//Closes the last opened infowindow when called.
function closeLastInfoWindow() {
	if (prevInfoWindow){
		prevInfoWindow.close();
	}
}

//Adds markers to the map and pushes them to the markers array.
function addMarker(myPos,myTitle,myInfo) {
	var marker = new google.maps.Marker({
		position: myPos,
		map: map,
		title: myTitle,
		icon: markerIcon,
	});
	markers.push(marker);
	
	infowindow = new google.maps.InfoWindow({content: myInfo});
	
	//Sets up an action listener to listen for clicks on markers
	google.maps.event.addListener(marker,
		'click', infoCallback(infowindow, marker))
}

//Sets up the map, its markers, and their infowindows
function initialize() {
	
	var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
	
	var myOptions = {
		zoom: initialZoom,
		center: latlng,
		mapTypeIds: 'styled_map',
		disableDefaultUI: true
	};
   
	map = new google.maps.Map(
		document.getElementById("map_canvas"),myOptions);
	
	//Styles the map according to the style in mapStyle.js
	map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
	
	//Defines the content of the infowindows assigned to each marker
	for (id in plaqueData) {
		
		var info = '<div id="iw-container">' +
			'<div class="iw-title">' + plaqueData[id].title + '</div>' +
			'<div class="iw-content">' +
				'<div class ="iw-subTitle">Unveiled:</div>' +
				plaqueData[id].date + ' by ' + plaqueData[id].unveiler +
				'<div class ="iw-subTitle">Located:</div>' +
				plaqueData[id].location +
				'<div class="iw-subTitle">Caption:</div>' +
				plaqueData[id].caption +
				'<div class="iw-subTitle">Sponsored by:</div>' +
				plaqueData[id].sponsor +
			'</div>' +
		'</div>';

	// Convert co-ords
	var osPt = new OSRef(
		plaqueData[id].easting,plaqueData[id].northing);
		var llPt = osPt.toLatLng(osPt);
		llPt.OSGB36ToWGS84();

	addMarker(
		new google.maps.LatLng(llPt.lat,llPt.lng),
		plaqueData[id].title,info);
   }
   
	//Clusters close markers together when the map is sufficiently zoomed out
	var markerCluster = new MarkerClusterer(map, markers,
		mcOptions);
    
}