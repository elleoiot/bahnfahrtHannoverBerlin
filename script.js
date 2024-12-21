const map = L.map('map').setView([52.5200, 13.4050], 7); // Start in Berlin
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const places = [
    { 
        name: "Mittellandkanal bei Wolfsburg", 
        coords: [52.440, 10.781], 
        description: "Deutschlands längste künstliche Wasserstraße, sichtbar bei Wolfsburg.", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Mittellandkanal_bei_Wolfsburg.jpg" 
    },
    { 
        name: "Elbe bei Magdeburg", 
        coords: [52.135, 11.647], 
        description: "Eindrucksvolle Elbüberquerung in der Nähe von Magdeburg.", 
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elbe_Br%C3%BCcke.jpg" 
    },
    { 
        name: "Havel bei Brandenburg", 
        coords: [52.398, 12.543], 
        description: "Der ICE überquert die Havel und bietet einen tollen Blick auf die Flusslandschaft.", 
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Havel_Br%C3%BCcke.jpg" 
    },
    { 
        name: "Lehrter Moor", 
        coords: [52.375, 9.731], 
        description: "Ein Naturgebiet mit Moorlandschaft und vielen Wildtieren, nahe Hannover.", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Lehrter_Moor.jpg" 
    },
    { 
        name: "Colbitzer Heide", 
        coords: [52.399, 11.509], 
        description: "Eine idyllische Heidelandschaft mit Wald und Heidekraut, südlich von Stendal.", 
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Colbitzer_Heide.jpg" 
    },
    { 
        name: "Havelländisches Luch", 
        coords: [52.603, 12.368], 
        description: "Ein weitläufiges Naturgebiet mit Wiesen und Flüssen, perfekt für Vogelbeobachtung.", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Havell%C3%A4ndisches_Luch.jpg" 
    },
    { 
        name: "Potsdamer Forst", 
        coords: [52.383, 13.031], 
        description: "Ein grünes Waldgebiet am Stadtrand von Potsdam, sichtbar vom Zug.", 
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Potsdamer_Forst.jpg" 
    },
    { 
        name: "Spree in Berlin", 
        coords: [52.512, 13.383], 
        description: "Die Spree markiert den Endpunkt der Zugfahrt und bietet großartige Ausblicke auf Berlin.", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Spree_Berlin.jpg" 
    }
];

places.forEach(place => {
    L.marker(place.coords)
     .addTo(map)
     .bindPopup(`
         <b>${place.name}</b><br>
         ${place.description}<br>
         <img src="${place.image}" alt="${place.name}" style="width:100%;max-width:200px;">
     `);
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log(`Deine aktuelle Position: Latitude: ${lat}, Longitude: ${lon}`);
            
            // Karte auf die aktuelle Position zentrieren
            map.setView([lat, lon], 13);

            // Marker für aktuelle Position hinzufügen
            L.marker([lat, lon])
                .addTo(map)
                .bindPopup('Hier bist du!')
                .openPopup();
        },
        (error) => {
            console.error("Fehler beim Abrufen der Geolocation", error);
        }
    );
} else {
    alert("Dein Browser unterstützt keine Geolocation.");
}



