const button = document.querySelector('#find-me');

const map = L.map('myMap');
map.setView({lon: 0, lat: 0}, 2);

function doZoom() {
    map.setZoom(5);
    }

    button.addEventListener('click', doZoom);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);
