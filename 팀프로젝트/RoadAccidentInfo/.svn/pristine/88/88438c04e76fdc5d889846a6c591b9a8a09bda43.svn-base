// 마커를 담을 배열입니다
var markers = [];

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	mapOption = {
		center: new kakao.maps.LatLng(35.91212, 128.8076),
		level: 2
	};

var map = new kakao.maps.Map(mapContainer, mapOption);

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
	map.setLevel(map.getLevel() - 1);
	$(".customoverlay").remove();
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
	map.setLevel(map.getLevel() + 1);
	$(".customoverlay").remove();
}

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();

// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
	zIndex: 1 ,
	removable: true
});

// 키워드로 장소를 검색합니다
searchPlacesAll();

kakao.maps.event.addListener(map, 'zoom_changed', function() {        
    $(".customoverlay").remove();
});

// 키워드 검색을 요청하는 함수입니다
function searchPlaces() {

	var keyword = document.getElementById('keyword').value;

	if (!keyword.replace(/^\s+|\s+$/g, '')) {
		alert('키워드를 입력해주세요!');
		return false;
	}

	// 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
	ps.keywordSearch(keyword, placesSearchCB);
}

function searchPlacesAll() {
	$("#map").before(`
		<div id="loading" style="width: 100vw; height: 100vh; position: relative; background-color : rgb(255,255,255); display: flex; text-align: center; justify-content: center; color: black;">
			<p style="margin-top: 40vh; font-size: 30; color: black; position: absolute; text-align: center; justify-content: center; ">데이터를 불러오는 중입니다...</p>
			<div class="spinner" style="position: absolute; top: 50vh; left: 48vw;"></div>
		</div>
	`);
	$(".info-bar").attr("style", "visibility:hidden");
	$(".custom_zoomcontrol").attr("style", "visibility:hidden");
	$("#category").attr("style", "visibility:hidden");
	$(".locationBtn").attr("style", "visibility:hidden");
	$(".customoverlay").remove();

	var keyword = document.getElementById('keyword').value;
	// 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
	ps.keywordSearchAll(keyword, placesSearchCBAll);
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
	if (status === kakao.maps.services.Status.OK) {

		// 정상적으로 검색이 완료됐으면
		// 검색 목록과 마커를 표출합니다
		displayPlaces(data);


	} else if (status === kakao.maps.services.Status.ZERO_RESULT) {

		alert('검색 결과가 존재하지 않습니다.');
		return;

	} else if (status === kakao.maps.services.Status.ERROR) {

		alert('검색 결과 중 오류가 발생했습니다.');
		return;

	}
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCBAll(data, status, pagination) {
	if (status === kakao.maps.services.Status.OK) {

		// 정상적으로 검색이 완료됐으면
		// 검색 목록과 마커를 표출합니다
		displayPlacesAll(data);


	} else if (status === kakao.maps.services.Status.ERROR) {

		alert('검색 결과 중 오류가 발생했습니다.');
		return;

	}
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlaces(places) {
	console.dir(places);

	var listEl = document.getElementById('placesList'),
		menuEl = document.getElementById('menu_wrap'),
		fragment = document.createDocumentFragment(),
		bounds = new kakao.maps.LatLngBounds(),
		listStr = '';

	// 검색 결과 목록에 추가된 항목들을 제거합니다
	removeAllChildNods(listEl);

	// 지도에 표시되고 있는 마커를 제거합니다
	removeMarker();

	for (var i = 0; i < places.length; i++) {
	    // 마커를 생성하고 지도에 표시합니다
		//console.log("위도:" + places[i].y);
		//console.log("경도:" + places[i].x);
		//console.log("타입: " + places[i].accidentType);
		console.log(places[i]);
		let addressName = places[i].address_name;
		let type = places[i].accidentType;
		let typeDisplayName = places[i].accidentDisplayName;
		let year = places[i].year;
		let occurNum = places[i].occurNum;
		let casltNum = places[i].casltNum;
		let dprNum = places[i].dprSum;
		let serNum = places[i].serNum;
		let sltNum = places[i].sltNum;
		let injNum = places[i].injNum;
		let x = places[i].x;
		let y = places[i].y;
		// 마커를 생성하고 지도에 표시합니다
		var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
			marker = addMarker(placePosition, i, type),
			itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

		// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
		// LatLngBounds 객체에 좌표를 추가합니다
		bounds.extend(placePosition);

		// 마커와 검색결과 항목에 mouseover 했을때
		// 해당 장소에 인포윈도우에 장소명을 표시합니다
		// mouseout 했을 때는 인포윈도우를 닫습니다
		(function (marker, title) {
			kakao.maps.event.addListener(marker, 'mouseover', function () {
				displayInfowindow(marker, title, type);
			});

			itemEl.onmouseover = function () {
				displayInfowindow(marker, title, type);
			};
			itemEl.onmouseout = function () {
				$(".customoverlay").remove();
			}

			// 마커와 검색결과 항목에 click 이벤트 추가
			kakao.maps.event.addListener(marker, 'click', function () {
				displayModal(title);
				$(".table").remove();
				$("#detail_accidentType").remove();
				$("#detail_year").remove();
				$("#detail_occur").remove();
				$("#detail_castl").remove();
				$("#detail_dpr").remove();
				$("#detail_ser").remove();
				$("#detail_slt").remove();
				$("#detail_inj").remove();
				$("#detail_lat").remove();
				$("#detail_lng").remove();
				$(".content").append(
					`<div class="table" style="display: flex; flex-direction: column; border: solid 0.1px rgb(0,0,0);">
						<tr>
							<td><p id="detail_accidentType" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사고 유형: ${typeDisplayName}</p></td>
							<td><p id="detail_year" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">발생 년도: ${year}년</p></td>
							<td><p id="detail_occur" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">발생건 수: ${occurNum}건</p></td>
							<td><p id="detail_castl" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사상자 수: ${casltNum}명</p></td>
							<td><p id="detail_dpr" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사망자 수: ${dprNum}명</p></td>
							<td><p id="detail_ser" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">중상자 수: ${serNum}명</p></td>
							<td><p id="detail_slt" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">경상자 수: ${sltNum}명</p></td>
							<td><p id="detail_inj" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">부상자 수: ${injNum}명</p></td>
							<td><p id="detail_lat" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">위도 정보: ${x}</p></td>
							<td><p id="detail_lng" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">경도 정보: ${y}</p></td>
						</tr>
					</div>
					`
				)
			});

			itemEl.onclick = function () {
				displayModal(title);
				$(".table").remove();
				$("#detail_accidentType").remove();
				$("#detail_year").remove();
				$("#detail_occur").remove();
				$("#detail_castl").remove();
				$("#detail_dpr").remove();
				$("#detail_ser").remove();
				$("#detail_slt").remove();
				$("#detail_inj").remove();
				$("#detail_lat").remove();
				$("#detail_lng").remove();
				$(".content").append(
					`<div class="table" style="display: flex; flex-direction: column; border: solid 0.1px rgb(0,0,0);">
						<tr>
							<td><p id="detail_accidentType" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사고 유형: ${typeDisplayName}</p></td>
							<td><p id="detail_year" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">발생 년도: ${year}년</p></td>
							<td><p id="detail_occur" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">발생건 수: ${occurNum}건</p></td>
							<td><p id="detail_castl" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사상자 수: ${casltNum}명</p></td>
							<td><p id="detail_dpr" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사망자 수: ${dprNum}명</p></td>
							<td><p id="detail_ser" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">중상자 수: ${serNum}명</p></td>
							<td><p id="detail_slt" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">경상자 수: ${sltNum}명</p></td>
							<td><p id="detail_inj" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">부상자 수: ${injNum}명</p></td>
							<td><p id="detail_lat" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">위도 정보: ${x}</p></td>
							<td><p id="detail_lng" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">경도 정보: ${y}</p></td>
						</tr>
					</div>
					`
				)
			}

			marker.setMap(map);
			markers.push(marker);

		})(marker, places[i].place_name);

		fragment.appendChild(itemEl);
	}

	//console.log(fragment);
	// 검색결과 항목들을 검색결과 목록 Element에 추가합니다
	listEl.appendChild(fragment);
	menuEl.scrollTop = 0;

	// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
	console.log(bounds);
	map.setBounds(bounds);
}

// 검색 결과 목록과 마커를 표출하는 함수입니다
function displayPlacesAll(places, type) {
	console.dir(places);

	var listEl = document.getElementById('placesList'),
		menuEl = document.getElementById('menu_wrap'),
		fragment = document.createDocumentFragment(),
		bounds = new kakao.maps.LatLngBounds(),
		listStr = '';

	// 검색 결과 목록에 추가된 항목들을 제거합니다
	removeAllChildNods(listEl);

	// 지도에 표시되고 있는 마커를 제거합니다
	removeMarker();

	for (var i = 0; i < places.length; i++) {
	    // 마커를 생성하고 지도에 표시합니다
		//console.log("위도:" + places[i].y);
		//console.log("경도:" + places[i].x);
		//console.log("타입: " + places[i].accidentType);
		let addressName = places[i].address_name;
		let type = places[i].accidentType;
		let typeDisplayName = places[i].accidentDisplayName;
		let year = places[i].year;
		let occurNum = places[i].occurNum;
		let casltNum = places[i].casltNum;
		let dprNum = places[i].dprSum;
		let serNum = places[i].serNum;
		let sltNum = places[i].sltNum;
		let injNum = places[i].injNum;
		let x = places[i].x;
		let y = places[i].y;
		// 마커를 생성하고 지도에 표시합니다
		var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
			marker = addMarker(placePosition, i, type),
			itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

		// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
		// LatLngBounds 객체에 좌표를 추가합니다
		bounds.extend(placePosition);

		// 마커와 검색결과 항목에 mouseover 했을때
		// 해당 장소에 인포윈도우에 장소명을 표시합니다
		// mouseout 했을 때는 인포윈도우를 닫습니다
		(function (marker, title) {
			kakao.maps.event.addListener(marker, 'mouseover', function () {
				displayInfowindow(marker, title, type);
			});

			itemEl.onmouseover = function () {
				displayInfowindow(marker, title, type);
			};
			itemEl.onmouseout = function() {
				$(".customoverlay").remove();
			}

			// 마커와 검색결과 항목에 click 이벤트 추가
			kakao.maps.event.addListener(marker, 'click', function () {
				displayModal(title);
				$(".table").remove();
				$("#detail_accidentType").remove();
				$("#detail_year").remove();
				$("#detail_occur").remove();
				$("#detail_castl").remove();
				$("#detail_dpr").remove();
				$("#detail_ser").remove();
				$("#detail_slt").remove();
				$("#detail_inj").remove();
				$("#detail_lat").remove();
				$("#detail_lng").remove();
				$(".content").append(
					`<div class="table" style="display: flex; flex-direction: column; border: solid 0.1px rgb(0,0,0);">
						<tr>
							<td><p id="detail_accidentType" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사고 유형: ${typeDisplayName}</p></td>
							<td><p id="detail_year" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">발생 년도: ${year}년</p></td>
							<td><p id="detail_occur" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">발생건 수: ${occurNum}건</p></td>
							<td><p id="detail_castl" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사상자 수: ${casltNum}명</p></td>
							<td><p id="detail_dpr" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사망자 수: ${dprNum}명</p></td>
							<td><p id="detail_ser" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">중상자 수: ${serNum}명</p></td>
							<td><p id="detail_slt" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">경상자 수: ${sltNum}명</p></td>
							<td><p id="detail_inj" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">부상자 수: ${injNum}명</p></td>
							<td><p id="detail_lat" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">위도 정보: ${x}</p></td>
							<td><p id="detail_lng" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">경도 정보: ${y}</p></td>
						</tr>
					</div>
					`
				)
			});

			itemEl.onclick = function () {
				displayModal(title);
				$(".table").remove();
				$("#detail_accidentType").remove();
				$("#detail_year").remove();
				$("#detail_occur").remove();
				$("#detail_castl").remove();
				$("#detail_dpr").remove();
				$("#detail_ser").remove();
				$("#detail_slt").remove();
				$("#detail_inj").remove();
				$("#detail_lat").remove();
				$("#detail_lng").remove();
				$(".content").append(
					`<div class="table" style="display: flex; flex-direction: column; border: solid 0.1px rgb(0,0,0);">
						<tr>
							<td><p id="detail_accidentType" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사고 유형: ${typeDisplayName}</p></td>
							<td><p id="detail_year" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">발생 년도: ${year}년</p></td>
							<td><p id="detail_occur" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">발생건 수: ${occurNum}건</p></td>
							<td><p id="detail_castl" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사상자 수: ${casltNum}명</p></td>
							<td><p id="detail_dpr" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">사망자 수: ${dprNum}명</p></td>
							<td><p id="detail_ser" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">중상자 수: ${serNum}명</p></td>
							<td><p id="detail_slt" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">경상자 수: ${sltNum}명</p></td>
							<td><p id="detail_inj" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">부상자 수: ${injNum}명</p></td>
							<td><p id="detail_lat" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">위도 정보: ${x}</p></td>
							<td><p id="detail_lng" class="col-md-12" style="margin: 0; border: solid 0.1px rgb(0,0,0);">경도 정보: ${y}</p></td>
						</tr>
					</div>
					`
				)
			}

			marker.setMap(map);
			markers.push(marker);			

		})(marker, places[i].place_name);

		fragment.appendChild(itemEl);
	}

	//console.log(fragment);
	// 검색결과 항목들을 검색결과 목록 Element에 추가합니다
	listEl.appendChild(fragment);
	menuEl.scrollTop = 0;

	// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
	let lat = 35.9155927;
    let lng = 128.8121458;
    function getLocation() {
        if (navigator.geolocation) { // GPS를 지원하면
            navigator.geolocation.getCurrentPosition(function(position) {
              lat = position.coords.latitude;
              lng = position.coords.longitude;
              console.log(position.coords.latitude + ' ' + position.coords.longitude);
			  bounds.pa = lat+0.03; // 우측 상단 경도
			  bounds.qa = lat-0.03; // 좌측 하단 경도
			  bounds.ha = lng+0.03; //좌측 하단 위도
			  bounds.oa = lng-0.03; // 우측 상단 위도
			  console.log(bounds);
			  map.setBounds(bounds);
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
	if(type !== "현재위치"){
		getLocation();	
	}
}

// 검색결과 항목을 Element로 반환하는 함수입니다
function getListItem(index, places) {
	//console.log(places);
	let accidentType = places.accidentType;
    var typeName;
    if(accidentType == "보행노인"){
        typeName = "../img/old_accident.png";
    }
	else if(accidentType == "보행노인사고"){
        typeName = "../img/old_accident.png";
    }
    else if(accidentType == "자전거"){
        typeName = "../img/bicycle_accident.png";
    }
    else if(accidentType == "스쿨존어린이"){
        typeName = "../img/schoolzone_accident.png";
    }
    else if(accidentType == "보행어린이"){
        typeName = "../img/child_accident.png";
    }
	else if(accidentType == "결빙"){
		typeName = "../img/frozen_accident.png";
	}
    else if(accidentType == "음주운전"){
        typeName = "../img/drive_accident.png";
    }
    else if(accidentType == "무단횡단"){
        typeName = "../img/walk_accident.png";
    }
    var el = document.createElement('li'),
        itemStr = `<span class="markerbg" style="background:url(${typeName}) no-repeat; background-size: 30px;"></span>` +
            '<div class="info">' +
            '   <h5>' + places.place_name + '</h5>';
    if (places.road_address_name) {
        itemStr += '    <span>' + places.road_address_name + '</span>' +
            '   <span class="jibun gray">' + places.address_name + '</span>';
    } else {
        itemStr += '    <span>' + places.address_name + '</span>';
    }
	itemStr += `    <span class="${places.accidentType}">사고 유형: ${places.accidentType}</span>`;
    itemStr += '    <span>' + '사고 건수: ' + places.occurNum + '</span>';
    el.innerHTML = itemStr;
    el.className = 'item';
    return el;
}

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
function addMarker(position, idx, title) {
    //console.log("추가할 마커 타입: " + title);
    var imageSrcUrl, hoverImageSrcUrl;
    if(title == "보행노인"){
        imageSrcUrl = "/img/old_accident.png";
		hoverImageSrcUrl = "../img/old_accident_hover.png"; // Change this to the path of your hover image
    }
	else if(title == "보행노인사고"){
        imageSrcUrl = "/img/old_accident.png";
		hoverImageSrcUrl = "../img/old_accident_hover.png";
    }
    else if(title == "자전거"){
        imageSrcUrl = '/img/bicycle_accident.png';
		hoverImageSrcUrl = "../img/bicycle_accident_hover.png";
    }
    else if(title == "스쿨존어린이"){
        imageSrcUrl = '/img/schoolzone_accident.png';
		hoverImageSrcUrl = "../img/schoolzone_accident_hover.png";
    }
    else if(title == "보행어린이"){
        imageSrcUrl = '/img/child_accident.png';
		hoverImageSrcUrl = "../img/child_accident_hover.png";
    }
	else if(title == "결빙"){
		imageSrcUrl = "/img/frozen_accident.png";
		hoverImageSrcUrl = "../img/frozen_accident_hover.png";
	}
    else if(title == "음주운전"){
        imageSrcUrl = '/img/drive_accident.png';
		hoverImageSrcUrl = "../img/drive_accident_hover.png";
    }
    else if(title == "무단횡단"){
        imageSrcUrl = '/img/walk_accident.png';
		hoverImageSrcUrl = "../img/walk_accident_hover.png";
    }
    var imageSrc = imageSrcUrl, // 마커 이미지 url, 스프라이트 이미지를 씁니다
    	imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
		hoverImageSize = new kakao.maps.Size(36, 37),
    	imgOptions = {},
    	markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
		hoverMarkerImage = new kakao.maps.MarkerImage(hoverImageSrcUrl, hoverImageSize, imgOptions),
    	marker = new kakao.maps.Marker({
    	    position: position, // 마커의 위치
    	    image: markerImage
    	});

	kakao.maps.event.addListener(marker, 'mouseover', function () {
		marker.setImage(hoverMarkerImage);
	});

	kakao.maps.event.addListener(marker, 'mouseout', function () {
		marker.setImage(markerImage);
	});

    marker.setMap(map); // 지도 위에 마커를 표출합니다
    markers.push(marker);  // 배열에 생성된 마커를 추가합니다
    return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
function removeMarker() {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
	markers = [];
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
	var paginationEl = document.getElementById('pagination'),
		fragment = document.createDocumentFragment(),
		i;

	// 기존에 추가된 페이지번호를 삭제합니다
	while (paginationEl.hasChildNodes()) {
		paginationEl.removeChild(paginationEl.lastChild);
	}

	for (i = 1; i <= pagination.last; i++) {
		var el = document.createElement('a');
		el.href = "#";
		el.innerHTML = i;

		if (i === pagination.current) {
			el.className = 'on';
		} else {
			el.onclick = (function (i) {
				return function () {
					pagination.gotoPage(i);
				}
			})(i);
		}

		fragment.appendChild(el);
	}
	paginationEl.appendChild(fragment);
}

// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
// 인포윈도우에 장소명을 표시합니다
function displayInfowindow(marker, title, type) {
	console.log(type);
	let accidentType = type;
    var typeName;
    if(accidentType == "보행노인"){
        typeName = "http://localhost/img/old_accident.png";
    }
	else if(accidentType == "보행노인사고"){
        typeName = "http://localhost/img/old_accident.png";
    }
    else if(accidentType == "자전거"){
        typeName = "http://localhost/img/bicycle_accident.png";
    }
    else if(accidentType == "스쿨존어린이"){
        typeName = "http://localhost/img/schoolzone_accident.png";
    }
    else if(accidentType == "보행어린이"){
        typeName = "http://localhost/img/child_accident.png";
    }
	else if(accidentType == "결빙"){
		typeName = "http://localhost/img/frozen_accident.png";
	}
    else if(accidentType == "음주운전"){
        typeName = "http://localhost/img/drive_accident.png";
    }
    else if(accidentType == "무단횡단"){
        typeName = "http://localhost/img/walk_accident.png";
    }
	// 커스텀 오버레이에 표시할 컨텐츠 입니다
	// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
	// 별도의 이벤트 메소드를 제공하지 않습니다 
	var content = 
	`
	<div class="customoverlay">
      <a href="https://map.kakao.com/link/map/11394059" target="_blank" style="display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-siz:14px;font-weight:bold;overflow:hidden;background: #d95050;background: #949494 url(${typeName}) no-repeat left 0px center; background-size: 36px 37px;">
        <span class="title">${title}</span>
      </a>
    </div>
	`;

	// 마커 위에 커스텀오버레이를 표시합니다
	// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
	var overlay = new kakao.maps.CustomOverlay({
		content: content,
		map: map,
		position: marker.getPosition()       
	});

	// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
	kakao.maps.event.addListener(marker, 'mouseover', function() {
		overlay.setMap(map);
	});
	kakao.maps.event.addListener(marker, 'mouseout', function() {
		overlay.setMap(null);
	});
}

// 마커를 클릭했을 때 모달창을 표시하는 함수
function displayModal(title) {
	var modal = document.getElementById("modal");
	var modalTitle = document.getElementById("modalTitle");

	// Set the modal content dynamically
	modalTitle.textContent = title;

	// Toggle modal visibility
	if (modal.style.display === "flex") {
		modal.style.display = "none";
	} else {
		modal.style.display = "flex";
		modal.style.zIndex = "101";

		var modalOverlay = document.querySelector(".modal-overlay");
		if (modalOverlay) {
			modalOverlay.addEventListener("click", closeModal);
		}
	}
}

// Add a function to close the modal
function closeModal() {
	var modal = document.getElementById("modal");
	modal.style.display = "none";
	$(".customoverlay").remove();
}

function removeModalOverlay() {
	var modalOverlay = document.querySelector(".modal-overlay");
	if (modalOverlay) {
		modalOverlay.removeEventListener("click", closeModal);
		modalOverlay.remove();
	}
}

// 검색결과 목록의 자식 Element를 제거하는 함수입니다
function removeAllChildNods(el) {
	while (el.hasChildNodes()) {
		el.removeChild(el.lastChild);
	}
}

// DOM 요소들을 가져옵니다.
const onoffButton = document.getElementById("onoffButton");
const infoBar = document.querySelector(".map_wrap");
const infoMain = document.querySelector(".info-bar");
const categories = document.querySelector(".categories");
// 메뉴가 열려있는지 여부를 추적할 변수
let isMenuOpen = false;

// 버튼을 클릭할 때의 이벤트 처리
const toggleMenu = () => {
	// isMenuOpen 값을 토글
	isMenuOpen = !isMenuOpen;



	// isMenuOpen에 따라 메뉴 열고 닫기
	if (isMenuOpen) {
		infoBar.style.transform = "translateX(-330px)";
		infoMain.style.pointerEvents = "none";
		onoffButton.innerHTML = '<span name="toggle-control">닫기</span>';
		onoffButton.style.transform = "translateX(-330px)";
		onoffButton.style.backgroundPosition = '-339px -150px';
		onoffButton.style.pointerEvents="all";
		categories.style.pointerEvents="all";

	} else {
		infoBar.style.transform = "translateX(0px)";
		infoMain.style.pointerEvents = "all";
		onoffButton.innerHTML = '<span name="toggle-control">열기</span>';
		onoffButton.style.transform = "translateX(0px)";
		onoffButton.style.backgroundPosition = '-339px -50px';
	}
	
};
$("#scroll_map").on('click', function() {
	$(".map_wrap").css({"display":"block","background-color":"#f2f9f9", "width": "330px", "height": "calc(100vh - 60px)"});
	$(".sc-button").css({"display":"block"});
	infoBar.style.transform = "translateX(0px)";
	infoMain.style.pointerEvents = "all";
	onoffButton.innerHTML = '<span name="toggle-control">열기</span>';
	onoffButton.style.transform = "translateX(0px)";
	onoffButton.style.backgroundPosition = '-339px -50px';
});
$("#scroll_graph").on('click', function() {
	$(".map_wrap").css({"display":"none"});
	$(".sc-button").css({"display":"none"});
	infoBar.style.transform = "translateX(-330px)";
	infoMain.style.pointerEvents = "none";
	onoffButton.innerHTML = '<span name="toggle-control">닫기</span>';
	onoffButton.style.transform = "translateX(-330px)";
	onoffButton.style.backgroundPosition = '-339px -150px';
	onoffButton.style.pointerEvents="all";
	categories.style.pointerEvents="all";
});
$("#scroll_qna").on('click', function() {
	$(".map_wrap").css({"display":"none"});
	$(".sc-button").css({"display":"none"});
	infoBar.style.transform = "translateX(-330px)";
	infoMain.style.pointerEvents = "none";
	onoffButton.innerHTML = '<span name="toggle-control">닫기</span>';
	onoffButton.style.transform = "translateX(-330px)";
	onoffButton.style.backgroundPosition = '-339px -150px';
	onoffButton.style.pointerEvents="all";
	categories.style.pointerEvents="all";
})
onoffButton.addEventListener("click", toggleMenu);
map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMRIGHT, true);

document.getElementById('current-location-btn').addEventListener('click', function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude,
				lon = position.coords.longitude;

			var locPosition = new kakao.maps.LatLng(lat, lon);

			displayMarker(locPosition);
			displayInfowindow()
			$(".customoverlay").remove();
		});
	} else {
		var locPosition = new kakao.maps.LatLng(35.91212, 128.8076);

		displayMarker(locPosition); // 위의 position으로 위치 변경
	}
});

function displayMarker(locPosition, message) {
	$("img[src='http://t1.daumcdn.net/mapjsapi/images/marker.png']").remove();
	var marker = new kakao.maps.Marker({
		map: map,
		position: locPosition
	});
	var iwContent = message,
		iwRemoveable = true;

	var infowindow = new kakao.maps.InfoWindow({
		content : iwContent,
		removable : iwRemoveable
	});

	
	map.setCenter(locPosition);
}


var cur_marker = new kakao.maps.Marker({
	position: map.getCenter()
})

cur_marker.setMap(map);

kakao.maps.event.addListener(map, 'rightclick', function(mouseEvent) {
    // 클릭한 위도, 경도 정보를 가져옵니다 
	console.log(mouseEvent);
	var latlng = mouseEvent.latLng; 
    
	// 마커 위치를 클릭한 위치로 옮깁니다
	cur_marker.setPosition(latlng);
	
	var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
	message += '경도는 ' + latlng.getLng() + ' 입니다';
	$.ajax({
		url: "http://localhost/apis/nearkm.do?latitude=" + latlng.getLat() + "&longitude=" + latlng.getLng(),
		type: "GET",
		origin: "http://127.0.0.1:3000",
		success: function(result) {
			let accidents = []
			for(let i=0; i<result.length; i++){
				//console.log(result[i]);
				accidents.push({
					address_name : result[i].mapPlaceAddress,
					place_name : result[i].mapPlaceAddress,
					road_address_name : result[i].accidentArea,
					x : result[i].longitude,
					y : result[i].latitude,
					occurNum : result[i].sumOfAccidentOccurCnt,
					accidentType: result[i].accidentType,
					accidentDisplayName: result[i].accidentDisplayName,
					year: result[i].accidentYear,
					dprSum : result[i].sumOfAccidentDprCnt,
					casltNum: result[i].sumOfAccidentCasltCnt,
					serNum: result[i].sumOfAccidentSerinjuryCnt,
					sltNum: result[i].sumOfAccidentSltinjuryCnt,
					injNum: result[i].sumOfAccidentInjuryCnt
				});
			}
			d = accidents;
			displayPlacesAll(d, "현재위치");
		},
		error: function(e) {
			console.log(e);
		}
	});
	console.log(message);  
})