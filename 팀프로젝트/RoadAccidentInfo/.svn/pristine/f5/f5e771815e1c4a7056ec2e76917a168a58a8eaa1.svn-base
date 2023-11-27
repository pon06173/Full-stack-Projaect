let lat = 37.5566803113882;
let lng = 126.904501286522;
function getLocation() {
    if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            console.log(position.coords.latitude + ' ' + position.coords.longitude);
            getAddr(lat,lng);
        }, function(error) {
            console.error(error);
        }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
        });
    }
    else {
        alert('GPS를 지원하지 않습니다');
    }
}
getLocation();

function getAddr(lat,lng){
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(lat, lng);
    let callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            console.log(result[0].address.region_2depth_name);
            $("#keyword").attr("value", "포항시");
        }
    }
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
}

document.getElementById('current-location-btn').addEventListener('click', function() {
    // Geolocation API에 의해 브라우저에서 사용자의 위치 정보를 얻습니다.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude, // 위도
                lon = position.coords.longitude; // 경도

            var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다.
            var message = '현재 위치'; // 인포윈도우에 표시될 내용입니다.

            displayMarker(locPosition, message); // 마커와 인포윈도우를 표시합니다.
        });
    } else { // 브라우저에서 Geolocation 사용이 불가능한 경우
        var locPosition = new kakao.maps.LatLng(37.566826, 126.9786567);
        var message = 'geolocation을 사용할 수 없어요..'

        displayMarker(locPosition, message);
    }
});

// 지도에 마커와 인포윈도우를 표시하는 함수입니다.
function displayMarker(locPosition, message) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition
    });
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });

    infowindow.open(map, marker);
    map.setCenter(locPosition); // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다.
}
