'use strict'
const mapita = {
    item: {
        map: undefined,
        latitud: undefined,
        longitud: undefined
    },
    inicio: () => {
        mapita.item.map = new google.maps.Map($('#map').get(0), {
            zoom: 5,
            center: { lat: -9.1191427, lng: -77.0349046 },
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        });
        //mapita.configuracion();
        mapita.buscar();
    },
    buscar: () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(mapita.funcionExito, mapita.funcionError);
        }
    },
    funcionExito: (posicion) => {
        mapita.item.latitud = posicion.coords.latitude;
        mapita.item.longitud = posicion.coords.longitude;
        //console.log(mapita.item.latitud + "-" + mapita.item.longitud)
        let miUbicacion = new google.maps.Marker({
            position: { lat: mapita.item.latitud, lng: mapita.item.longitud },
            animation: google.maps.Animation.DROP,
            map: mapita.item.map
        });
        mapita.item.map.setZoom(17);
        mapita.item.map.setCenter({ lat: mapita.item.latitud, lng: mapita.item.longitud });
    },
    funcionError: (error) => {
        alert("Tenemos un problema con  encontrar tu ubicacion");
    }
};
$(document).ready(mapita.inicio);