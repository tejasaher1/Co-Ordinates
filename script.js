const start = [19.076, 72.8777];
const current = [-36.802237, 12.913736];
const end = [40.7128, -74.006];

const map = L.map("map").setView([10, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const path = ["M", start, 
              "C", [-62, 30], [-32.5, 11], current];

L.curve(path, { color: "blue", weight: 2 }).addTo(map);

var polyline = L.polyline([current, end], {
  color: "blue",
  dashArray: "5, 10",
  dashOffset: "0",
}).addTo(map);

map.fitBounds(polyline.getBounds());

L.marker(start).bindPopup("Start: Mumbai").addTo(map);
L.marker(current).bindPopup("Current Location").addTo(map);
L.marker(end).bindPopup("End: New York").addTo(map);
