mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
container: "map", // container ID
style: "mapbox://styles/mapbox/streets-v12",
center: listing.geometry.coordinates, // starting position [longitude, latitude]  Generally our use map then use to locate first latitude then longitue
zoom: 8// starting zoom
});

const marker = new mapboxgl.Marker({ color: "red"})
   .setLngLat(listing.geometry.coordinates) // Listing.geometry.coordinates
   .setPopup(
     new mapboxgl.Popup({offset: 25 }).setHTML(
         `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
     )
   )
   .addTo(map);
