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
let map
let marker
let btn = document.querySelector("button");
btn.addEventListener('click', () => {
    let userlocation = document.querySelector(".user-location");
    navigator.geolocation.getCurrentPosition(getposition);
    function getposition(position) {
        lan = position.coords.latitude;
        long = position.coords.longitude;
        let LatLng = new google.maps.LatLng(lan, long);
        if (typeof map === 'undefined') {
            map = new google.maps.Map(userlocation, {
                zoom: 16,
                center: LatLng,
                mapTypeId: "roadmap"
            })


        }
        else { map.setCenter(LatLng) }
        if (typeof marker === 'undefined') {

            marker = new google.maps.Marker({
                title: 'your location',
                position: LatLng,
                map: map
            })
        } else {
            marker.setPosition(LatLng);
        }
    }
})