let shoplocation = document.querySelector(".shop-location");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showposition);

    function showposition(pos) {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        let langlong = new google.maps.LatLng(lat, lon);
        let mymap = new google.maps.Map(shoplocation, {
            zoom: 16,
            center: langlong,
            mapTypeId: "roadmap"
        })
        new google.maps.Marker({
            title: "ourshop",
            position: langlong,
            map: mymap
        })



    }
}
else {
    alert('access denied for showing location')
}
