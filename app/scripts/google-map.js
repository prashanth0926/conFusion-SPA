function initGoogleMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 22.33422, lng: 114.21756},
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: {lat: 22.33422, lng: 114.21756},
        map: map,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569',
        title: 'Ristorente con Fusion'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Ristorente con Fusion'
    });
    marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
    });
}