function initMap() {
    // Specify the location you want to mark
    const location = { lat: -29.112994523577303, lng: 26.22662536549738 }; // Example coordinates

    // Create a new map centered on the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20, // Adjust zoom level as needed
        center: location,
        mapTypeId: 'roadmap' // Options: roadmap, satellite, hybrid, terrain
    });

    // Add a marker at the specified location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "The Potter's House"
    });

    // Add an info window for the marker
    const infoWindow = new google.maps.InfoWindow({
        content: '<h3>The Potter\'s House</h3><p>Directions</p>'
    });

    // Show the info window when the marker is clicked
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}