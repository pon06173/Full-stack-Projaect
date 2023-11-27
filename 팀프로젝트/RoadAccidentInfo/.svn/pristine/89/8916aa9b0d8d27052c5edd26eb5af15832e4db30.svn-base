(function(window) {
    var IE_VERSION = function() {
        return void 0 === window.ActiveXObject ? null : !document.querySelector ? 7 : !document.addEventListener ? 8 : !window.atob ? 9 : !document.__proto__ ? 10 : 11
    }()
      , STATUS = {
        OK: "OK",
        ERROR: "ERROR",
        ZERO_RESULT: "ZERO_RESULT"
    }
      , SORT_BY = {
        ACCURACY: "accuracy",
        DISTANCE: "distance"
    }
      , COORDS = {
        TM: "TM",
        WGS84: "WGS84",
        WTM: "WTM",
        CONGNAMUL: "CONGNAMUL",
        WCONGNAMUL: "WCONGNAMUL"
    }
      , ANALYZE_TYPE = {
        SIMILAR: "similar",
        EXACT: "exact"
    }
      , SECURE = "https:" == window.location.protocol
      , PROTOCOL = SECURE ? "https:" : "http:"
      , DOMAIN = PROTOCOL + "//dapi.kakao.com"
      , URL = {
        GEO: DOMAIN + "/v2/local/geo/",
        SEARCH: DOMAIN + "/v2/local/search/"
    }
      , ERROR_MESSAGE = {
        MISSING_ARGUMENTS: "\ub9e4\uac1c\ubcc0\uc218\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4: ",
        APIKEY_REQUIRED: "Daum Maps API \ub97c \uc704\ud55c apikey \uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4: apikey\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.",
        NOT_FOUND_NAMESPACE: "daum.maps \ub124\uc784\uc2a4\ud398\uc774\uc2a4\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4: Daum Maps Javascript Open API\ub97c \uba3c\uc800 \ub85c\ub4dc\ud558\uc2ed\uc2dc\uc624."
    }
      , DAUM_MAPS = function(b) {
        var a;
        if ((a = b.daum) && (a = a.maps))
            return a;
        throw Error(ERROR_MESSAGE.NOT_FOUND_NAMESPACE);
    }(window)
      , APP_KEY = DAUM_MAPS.apikey
      , APP_VERSION = DAUM_MAPS.version
      , KA_HEADER_STRING = "sdk/" + APP_VERSION + " os/javascript lang/" + (navigator.userLanguage || navigator.language) + " device/" + navigator.platform.replace(/ /g, "_") + " origin/" + encodeURIComponent(location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : ""))
      , AUTH_HEADER_STRING = "KakaoAK " + APP_KEY
      , AUTH_PARAM_STRING = "appkey=" + APP_KEY + "&version=" + APP_VERSION;
    var Util = {
        extend: function(b) {
            for (var a = 1; a < arguments.length; a++) {
                var c = arguments[a];
                if (void 0 !== c && null !== c)
                    for (var d in c)
                        c.hasOwnProperty(d) && (b[d] = c[d])
            }
            return b
        },
        update: function(b) {
            for (var a = 1; a < arguments.length; a++) {
                var c = arguments[a];
                if (void 0 !== c && null !== c)
                    for (var d in c)
                        c.hasOwnProperty(d) && d in b && (b[d] = c[d])
            }
            return b
        },
        serialize: function(b) {
            var a = [], c, d;
            for (d in b)
                c = b[d],
                void 0 !== c && null !== c && a.push(encodeURIComponent(d) + "=" + encodeURIComponent(c));
            return a.join("&")
        },
        toLatLng: function(b) {
            return b instanceof daum.maps.Coords ? b.toLatLng() : b
        }
    };
    var Ajax = !IE_VERSION || (9 < IE_VERSION) ? function(b) {
        var a = new XMLHttpRequest;
        a.open("GET", b.url + "?" + Util.serialize(b.params), !0);
        a.setRequestHeader("KA", KA_HEADER_STRING);
        a.setRequestHeader("Authorization", AUTH_HEADER_STRING);
        a.onreadystatechange = function() {
            if (4 === a.readyState)
                if (200 === a.status)
                    b.oncomplete(JSON.parse(a.responseText));
                else
                    b.onerror()
        }
        ;
        a.send()
    }
    : function(b) {
        var a = new XDomainRequest
          , c = AUTH_PARAM_STRING + "&" + Util.serialize(b.params);
        a.onload = function() {
            b.oncomplete(JSON.parse(a.responseText))
        }
        ;
        a.onerror = b.onerror;
        a.open("GET", b.url + "?" + c);
        setTimeout(function() {
            a.send()
        }, 0)
    }
    ;
    function RequestFactory(b, a, c) {
        return function(d) {
            Util.update(a, d);
            Ajax({
                url: b,
                params: a,
                oncomplete: function(b) {
                    //console.log("c함수: " + c);
                    c(b, a)
                },
                onerror: function() {
                    c()
                }
            })
        }
    }
    ;function AddressSearch(b, a) {
        return RequestFactory(URL.SEARCH + "address.json", {
            query: b,
            page: 1,
            size: 10,
            analyze_type: null
        }, a)
    }
    ;function Coord2RegionCode(b, a, c) {
        return RequestFactory(URL.GEO + "coord2regioncode.json", {
            x: b,
            y: a,
            input_coord: null,
            output_coord: null
        }, c)
    }
    ;function Coord2Address(b, a, c) {
        return RequestFactory(URL.GEO + "coord2address.json", {
            x: b,
            y: a,
            input_coord: null
        }, c)
    }
    ;function TransCoord(b, a, c) {
        return RequestFactory(URL.GEO + "transcoord.json", {
            x: b,
            y: a,
            input_coord: null,
            output_coord: null
        }, c)
    }
    ;function KeywordSearch(b, a) {
        console.log(b);
        console.log(a);
        return RequestFactory(URL.SEARCH + "keyword.json", {
            query: b,
            category_group_code: null,
            x: null,
            y: null,
            radius: null,
            rect: null,
            page: 1,
            size: 15,
            sort: null
        }, a)
    }
    ;function CategorySearch(b, a) {
        return RequestFactory(URL.SEARCH + "category.json", {
            category_group_code: b,
            x: null,
            y: null,
            radius: null,
            rect: null,
            page: 1,
            size: 15,
            sort: null
        }, a)
    }
    ;function Pagination(b, a, c) {
        function d(b) {
            a.page = b;
            c(a)
        }
        var h = a.page
          , b = Number(b.pageable_count)
          , g = a.size
          , e = Math.ceil(b / g);
        this.totalCount = b;
        this.hasNextPage = h < e;
        this.hasPrevPage = 1 < h && h <= e;
        this.first = 1;
        this.current = h;
        this.last = e;
        this.perPage = g;
        this.nextPage = function() {
            this.hasNextPage && d(h + 1)
        }
        ;
        this.prevPage = function() {
            this.hasPrevPage && d(h - 1)
        }
        ;
        this.gotoPage = function(a) {
            a = Number(a);
            0 < a && (a <= e && a !== h) && d(a)
        }
        ;
        this.gotoFirst = function() {
            d(1)
        }
        ;
        this.gotoLast = function() {
            d(e)
        }
        console.log('로드 완료');
    }
    ;function Geocoder() {
        this.addressSearch = function(b, a, c) {
            var d = AddressSearch(b, function(b, c) {
                var e, f;
                b ? (f = b.documents,
                e = 0 === f.length ? STATUS.ZERO_RESULT : STATUS.OK,
                a(f, e, new Pagination(b.meta,c,d))) : a(STATUS.ERROR, null, null)
            });
            d(c)
        }
        ;
        this.coord2RegionCode = function(b, a, c, d) {
            Coord2RegionCode(b, a, function(a) {
                a ? (a = a.documents,
                c(a, STATUS.OK)) : c(STATUS.ERROR, null, null)
            })(d)
        }
        ;
        this.coord2Address = function(b, a, c, d) {
            Coord2Address(b, a, function(a) {
                var b;
                a ? (b = a.documents,
                a = 0 === b.length ? STATUS.ZERO_RESULT : STATUS.OK,
                c(b, a)) : c(STATUS.ERROR, null, null)
            })(d)
        }
        ;
        this.transCoord = function(b, a, c, d) {
            TransCoord(b, a, function(a) {
                var b;
                a ? (b = a.documents,
                a = 0 === b.length ? STATUS.ZERO_RESULT : STATUS.OK,
                c(b, a)) : c(STATUS.ERROR, null, null)
            })(d)
        }
    }
    ;function Places(b) {
        function a(a) {
            var b = Util.toLatLng(a.getSouthWest())
              , a = Util.toLatLng(a.getNorthEast());
            return {
                rect: b.getLng() + "," + b.getLat() + "," + a.getLng() + "," + a.getLat()
            }
        }
        function c(a) {
            a = Util.toLatLng(a);
            return {
                x: a.getLng(),
                y: a.getLat()
            }
        }
        var d = b;
        this.setMap = function(a) {
            d = a
        }
        ;
        this.keywordSearch = function(b, g, e) {
            e = e || {};
            e.location && Util.extend(e, c(e.location));
            e.bounds && Util.extend(e, a(e.bounds));
            d && (e.useMapCenter && Util.extend(e, c(d.getCenter())),
            e.useMapBounds && Util.extend(e, a(d.getBounds())));
            var f = KeywordSearch(b, function(a, b) {
                $("#map").before(`
                    <div id="loading" style="width: 100vw; height: 100vh; position: relative; background-color : rgb(255,255,255); display: flex; text-align: center; justify-content: center; color: black;">
                        <p style="margin-top: 40vh; font-size: 30; color: black; position: absolute; text-align: center; justify-content: center; ">데이터를 불러오는 중입니다...</p>
                        <div class="spinner" style="position: absolute; top: 50vh; left: 48vw;"></div>
                    </div>
                `);
                $(".info-bar").attr("style", "visibility:hidden");
                $(".custom_zoomcontrol").attr("style", "visibility:hidden");
                $("#category").attr("style", "display:none");
                $(".vis-weather").attr("style", "visibility:hidden");
                $(".sum_accidents").attr("style", "visibility:hidden");
                $(".locationBtn").attr("style", "visibility:hidden");
                $(".customoverlay").remove();
                var c, d;
                //console.log(b.query);
                if (a) {
                    //console.log(a.documents);
                    let accidents = [];
                    $.ajax({
                        url: "http://localhost/apis/query_accident.do",
                        type: "GET",
                        data: "param=" + b.query,
                        origin: "http://127.0.0.1:3000",
                        success: function(result) {
                            let occurSum = 0;
                            let casltSum = 0;
                            let dprSum = 0;
                            let serSum = 0;
                            let sltSum = 0;
                            let injSum = 0;
                            let jaywalk_occurSum = 0;
                            let jaywalk_casltSum = 0;
                            let jaywalk_dprSum = 0;
                            let jaywalk_serSum = 0;
                            let jaywalk_sltSum = 0;
                            let jaywalk_injSum = 0;
                            let old_occurSum = 0;
                            let old_casltSum = 0;
                            let old_dprSum = 0;
                            let old_serSum = 0;
                            let old_sltSum = 0;
                            let old_injSum = 0;
                            let child_occurSum = 0;
                            let child_casltSum = 0;
                            let child_dprSum = 0;
                            let child_serSum = 0;
                            let child_sltSum = 0;
                            let child_injSum = 0;
                            let school_occurSum = 0;
                            let school_casltSum = 0;
                            let school_dprSum = 0;
                            let school_serSum = 0;
                            let school_sltSum = 0;
                            let school_injSum = 0;
                            let bicycle_occurSum = 0;
                            let bicycle_casltSum = 0;
                            let bicycle_dprSum = 0;
                            let bicycle_serSum = 0;
                            let bicycle_sltSum = 0;
                            let bicycle_injSum = 0;
                            let frozen_occurSum = 0;
                            let frozen_casltSum = 0;
                            let frozen_dprSum = 0;
                            let frozen_serSum = 0;
                            let frozen_sltSum = 0;
                            let frozen_injSum = 0;
                            let drive_occurSum = 0;
                            let drive_casltSum = 0;
                            let drive_dprSum = 0;
                            let drive_serSum = 0;
                            let drive_sltSum = 0;
                            let drive_injSum = 0;
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
                                occurSum += result[i].sumOfAccidentOccurCnt;
                                casltSum += result[i].sumOfAccidentCasltCnt;
                                dprSum += result[i].sumOfAccidentDprCnt;
                                serSum += result[i].sumOfAccidentSerinjuryCnt;
                                sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                injSum += result[i].sumOfAccidentInjuryCnt;
                                if(result[i].accidentType == "무단횡단"){
                                    jaywalk_occurSum += result[i].sumOfAccidentOccurCnt;
                                    jaywalk_casltSum += result[i].sumOfAccidentCasltCnt;
                                    jaywalk_dprSum += result[i].sumOfAccidentDprCnt;
                                    jaywalk_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                    jaywalk_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                    jaywalk_injSum += result[i].sumOfAccidentInjuryCnt;
                                }
                                else if(result[i].accidentType == "보행노인"){
                                    old_occurSum += result[i].sumOfAccidentOccurCnt;
                                    old_casltSum += result[i].sumOfAccidentCasltCnt;
                                    old_dprSum += result[i].sumOfAccidentDprCnt;
                                    old_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                    old_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                    old_injSum += result[i].sumOfAccidentInjuryCnt;
                                }
                                else if(result[i].accidentType == "보행어린이"){
                                    child_occurSum += result[i].sumOfAccidentOccurCnt;
                                    child_casltSum += result[i].sumOfAccidentCasltCnt;
                                    child_dprSum += result[i].sumOfAccidentDprCnt;
                                    child_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                    child_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                    child_injSum += result[i].sumOfAccidentInjuryCnt;
                                }
                                else if(result[i].accidentType == "스쿨존어린이"){
                                    school_occurSum += result[i].sumOfAccidentOccurCnt;
                                    school_casltSum += result[i].sumOfAccidentCasltCnt;
                                    school_dprSum += result[i].sumOfAccidentDprCnt;
                                    school_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                    school_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                    school_injSum += result[i].sumOfAccidentInjuryCnt;
                                }
                                else if(result[i].accidentType == "자전거"){
                                    bicycle_occurSum += result[i].sumOfAccidentOccurCnt;
                                    bicycle_casltSum += result[i].sumOfAccidentCasltCnt;
                                    bicycle_dprSum += result[i].sumOfAccidentDprCnt;
                                    bicycle_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                    bicycle_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                    bicycle_injSum += result[i].sumOfAccidentInjuryCnt;
                                }
                                else if(result[i].accidentType == "결빙"){
                                    frozen_occurSum += result[i].sumOfAccidentOccurCnt;
                                    frozen_casltSum += result[i].sumOfAccidentCasltCnt;
                                    frozen_dprSum += result[i].sumOfAccidentDprCnt;
                                    frozen_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                    frozen_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                    frozen_injSum += result[i].sumOfAccidentInjuryCnt;
                                }
                                else if(result[i].accidentType == "음주운전"){
                                    drive_occurSum += result[i].sumOfAccidentOccurCnt;
                                    drive_casltSum += result[i].sumOfAccidentCasltCnt;
                                    drive_dprSum += result[i].sumOfAccidentDprCnt;
                                    drive_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                    drive_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                    drive_injSum += result[i].sumOfAccidentInjuryCnt;
                                }
                            }
                            d = accidents;
                            //d = a.documents;
                            c = d.length === 0 ? STATUS.ZERO_RESULT : STATUS.OK;
                            g(d, c, new Pagination(a.meta,b,f));
                            $("#loading").remove();
                            $(".info-bar").attr("style", "visibility:visible");
                            $(".custom_zoomcontrol").attr("style", "visibility:visible");
                            $("#category").attr("style", "display:block");
                            $(".vis-weather").attr("style", "visibility:visible").
                            css({"width": "auto", "height": "auto", "background-color": "white", "border-radius": "10px", "border" : "3px", 
                                "justify-content" : "center",
                                "display": "flex", "flex-direction": "row", 
                                "position": "absolute", "top": "10px", "right" : "40vw" ,"box-shadow": "rgba(0, 0, 0, 0.2) 2px 1px 5px", "z-index": "3",
                                "align-items" : "center"
                            });
                            $(".sum_accidents").attr("style", "visibility:visible").
                            css({"width": "auto", "height": "auto", "background-color": "white", "border-radius": "10px", "border" : "3px", 
                                "justify-content" : "center",
                                "display": "flex", "flex-direction": "row", 
                                "position": "absolute", "top": "60px", "right" : "30vw" ,"box-shadow": "rgba(0, 0, 0, 0.2) 2px 1px 5px", "z-index": "3",
                                "align-items" : "center"
                            });
                            $(".locationBtn").attr("style", "visibility:visible");

                            $(".jaywalk").off('click');
                            $(".old").off('click');
                            $(".child").off('click');
                            $(".school").off('click');
                            $(".frozen").off('click');
                            $(".drive").off('click');
                            $(".jaywalk").on('click', function() {
                                $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/walk_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                $(".accident_option_item").attr("style", "visibility:visible");
                            
                                $(".보행노인").parent().parent().attr("style", "display:none");
                                $(".보행노인사고").parent().parent().attr("style", "display:none");
                                $(".보행어린이").parent().parent().attr("style", "display:none");
                                $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                $(".자전거").parent().parent().attr("style", "display:none");
                                $(".결빙").parent().parent().attr("style", "display:none");
                                $(".음주운전").parent().parent().attr("style", "display:none");
                                $(".무단횡단").parent().parent().attr("style", "display:block");

                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${jaywalk_occurSum}, 사상자 수: ${jaywalk_casltSum}, 사망자 수: ${jaywalk_dprSum}, 중상자 수: ${jaywalk_serSum}, 경상자 수: ${jaywalk_sltSum}, 부상자 수: ${jaywalk_injSum}</p>
                                `
                                );
                            });
                            
                            $(".old").on('click', function() {
                                $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/old_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                $(".accident_option_item").attr("style", "visibility:visible");
                            
                                $(".보행어린이").parent().parent().attr("style", "display:none");
                                $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                $(".자전거").parent().parent().attr("style", "display:none");
                                $(".결빙").parent().parent().attr("style", "display:none");
                                $(".음주운전").parent().parent().attr("style", "display:none");
                                $(".무단횡단").parent().parent().attr("style", "display:none");
                                $(".보행노인").parent().parent().attr("style", "display:block");
                                $(".보행노인사고").parent().parent().attr("style", "display:block");
                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${old_occurSum}, 사상자 수: ${old_casltSum}, 사망자 수: ${old_dprSum}, 중상자 수: ${old_serSum}, 경상자 수: ${old_sltSum}, 부상자 수: ${old_injSum}</p>
                                `
                                );
                            });
                            
                            $(".child").on('click', function() {
                                $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/child_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                $(".accident_option_item").attr("style", "visibility:visible");
                            
                                $(".보행노인").parent().parent().attr("style", "display:none");
                                $(".보행노인사고").parent().parent().attr("style", "display:none");
                                $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                $(".자전거").parent().parent().attr("style", "display:none");
                                $(".결빙").parent().parent().attr("style", "display:none");
                                $(".음주운전").parent().parent().attr("style", "display:none");
                                $(".무단횡단").parent().parent().attr("style", "display:none");
                                $(".보행어린이").parent().parent().attr("style", "display:block");
                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${child_occurSum}, 사상자 수: ${child_casltSum}, 사망자 수: ${child_dprSum}, 중상자 수: ${child_serSum}, 경상자 수: ${child_sltSum}, 부상자 수: ${child_injSum}</p>
                                `
                                );
                            });
                            
                            $(".school").on('click', function() {
                                $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/schoolzone_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                $(".accident_option_item").attr("style", "visibility:visible");
                            
                                $(".보행노인").parent().parent().attr("style", "display:none");
                                $(".보행노인사고").parent().parent().attr("style", "display:none");
                                $(".자전거").parent().parent().attr("style", "display:none");
                                $(".결빙").parent().parent().attr("style", "display:none");
                                $(".음주운전").parent().parent().attr("style", "display:none");
                                $(".무단횡단").parent().parent().attr("style", "display:none");
                                $(".보행어린이").parent().parent().attr("style", "display:none");
                                $(".스쿨존어린이").parent().parent().attr("style", "display:block");
                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${school_occurSum}, 사상자 수: ${school_casltSum}, 사망자 수: ${school_dprSum}, 중상자 수: ${school_serSum}, 경상자 수: ${school_sltSum}, 부상자 수: ${school_injSum}</p>
                                `
                                );
                            });
                            
                            $(".frozen").on('click', function() {
                                $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/frozen_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                $(".accident_option_item").attr("style", "visibility:visible");
                            
                                $(".보행노인").parent().parent().attr("style", "display:none");
                                $(".보행노인사고").parent().parent().attr("style", "display:none");
                                $(".자전거").parent().parent().attr("style", "display:none");
                                $(".음주운전").parent().parent().attr("style", "display:none");
                                $(".무단횡단").parent().parent().attr("style", "display:none");
                                $(".보행어린이").parent().parent().attr("style", "display:none");
                                $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                $(".결빙").parent().parent().attr("style", "display:block");
                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${frozen_occurSum}, 사상자 수: ${frozen_casltSum}, 사망자 수: ${frozen_dprSum}, 중상자 수: ${frozen_serSum}, 경상자 수: ${frozen_sltSum}, 부상자 수: ${frozen_injSum}</p>
                                `
                                );
                            });
                            
                            $(".drive").on('click', function() {
                                $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/drive_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                $(".accident_option_item").attr("style", "visibility:visible");
                            
                                $(".보행어린이").parent().parent().attr("style", "display:none");
                                $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                $(".자전거").parent().parent().attr("style", "display:none");
                                $(".결빙").parent().parent().attr("style", "display:none");
                                $(".무단횡단").parent().parent().attr("style", "display:none");
                                $(".보행노인").parent().parent().attr("style", "display:none");
                                $(".보행노인사고").parent().parent().attr("style", "display:none");
                                $(".음주운전").parent().parent().attr("style", "display:block");
                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${drive_occurSum}, 사상자 수: ${drive_casltSum}, 사망자 수: ${drive_dprSum}, 중상자 수: ${drive_serSum}, 경상자 수: ${drive_sltSum}, 부상자 수: ${drive_injSum}</p>
                                `
                                );
                            });
                            
                            $(".bicycle").on('click', function() {
                                $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                $("img[src^='/img/bicycle_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                $(".accident_option_item").attr("style", "visibility:visible");
                            
                                $(".보행어린이").parent().parent().attr("style", "display:none");
                                $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                $(".결빙").parent().parent().attr("style", "display:none");
                                $(".음주운전").parent().parent().attr("style", "display:none");
                                $(".무단횡단").parent().parent().attr("style", "display:none");
                                $(".보행노인").parent().parent().attr("style", "display:none");
                                $(".보행노인사고").parent().parent().attr("style", "display:none");
                                $(".자전거").parent().parent().attr("style", "display:block");
                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${bicycle_occurSum}, 사상자 수: ${bicycle_casltSum}, 사망자 수: ${bicycle_dprSum}, 중상자 수: ${bicycle_serSum}, 경상자 수: ${bicycle_sltSum}, 부상자 수: ${bicycle_injSum}</p>
                                `
                                );
                            });
                            
                            $(".allType").on('click', function() {
                                $("img[src^='/img/walk_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                $("img[src^='/img/old_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                $("img[src^='/img/child_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                $("img[src^='/img/schoolzone_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                $("img[src^='/img/frozen_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                $("img[src^='/img/drive_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                $("img[src^='/img/bicycle_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                $(".accident_option_item").attr("style", "visibility:visible");
                            
                                $(".보행어린이").parent().parent().attr("style", "display:block");
                                $(".스쿨존어린이").parent().parent().attr("style", "display:block");
                                $(".결빙").parent().parent().attr("style", "display:block");
                                $(".음주운전").parent().parent().attr("style", "display:block");
                                $(".무단횡단").parent().parent().attr("style", "display:block");
                                $(".보행노인").parent().parent().attr("style", "display:block");
                                $(".보행노인사고").parent().parent().attr("style", "display:block");
                                $(".자전거").parent().parent().attr("style", "display:block");
                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${occurSum}, 사상자 수: ${casltSum}, 사망자 수: ${dprSum}, 중상자 수: ${serSum}, 경상자 수: ${sltSum}, 부상자 수: ${injSum}</p>
                                `
                                );
                            });
                            console.log(getGraphData(2012, 2));
                            setAreaGraphData($("#keyword").val());
                            let weatherList = [];
                            $.ajax({
                                url: "http://localhost/api/weather?areaName=" + $("#keyword").val().substring(0, 2),
                                type: "GET",
                                origin: "http://127.0.0.1:3000",
                                timeout:  -1,
                                async: false,
                                success: function (result) {
                                    console.log("결과");
                                    for(let i=0; i<result.length; i++){
                                        console.log(result[i]);
                                        let areaString = (result[i].substring(0).split("지역: ")[1]).substring(0).split(",")[0];
                                        let skyString = (result[i].substring(0).split("하늘 상태: ")[1]).substring(0).split(",")[0];
                                        let temperString = (result[i].substring(0).split("현재 기온: ")[1]).substring(0).split(",")[0];
                                        let rainString = (result[i].substring(0).split("강수 상태: ")[1]);
                                        console.log(areaString);
                                        console.log(skyString);
                                        console.log(temperString);
                                        console.log(rainString);
                                        if(rainString == "비"){
                                            skyString = "비";
                                        }
                                        weatherList.push({area: areaString, skyStatus: skyString, nwTemp: temperString, nwRain: rainString});
                                        console.log(weatherList);
                    
                                        let imgSrc;
                                        if(skyString == "맑음"){
                                            imgSrc = "/img/sunny.png";
                                        }
                                        else if(skyString == "구름많음"){
                                            imgSrc = "/img/cloudy.png";
                                        }
                                        else if(skyString == "흐림"){
                                            imgSrc = "/img/cloudy.png";
                                        }
                                        else if(skyString == "비"){
                                            imgSrc = "/img/rainny.png";
                                        }

                                        //console.log(areaName);
                                        $(".vis-weather").html("");
                                        $(".vis-weather").append(
                                        `
                                            <p style="color: black; margin: 0px; font-weight: 600; font-size: 16px;"> ${areaString}시 </p>
                                            <p style="color: black; margin: 0px; font-size: 15px;">${skyString} ${temperString}°C 강수상태: ${rainString}</p>
                                            <img style="width: 25px; height: 25px;" src="${imgSrc}"/>
                                        `
                                        );
                                        $(".sum_accidents").html("");
                                        $(".sum_accidents").append(
                                        `
                                            <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${occurSum}, 사상자 수: ${casltSum}, 사망자 수: ${dprSum}, 중상자 수: ${serSum}, 경상자 수: ${sltSum}, 부상자 수: ${injSum}</p>
                                        `
                                        );
                                    }
                                },
                                error: function (e) {
                                    console.log(e);
                                }
                            });


                        },
                        error: function(e) {
                            console.log(e);
                        }
                    });
                } else
                    g(STATUS.ERROR, null, null)
            });
            f(e)
        }
        ;

        this.keywordSearchAll = function(b, g, e) {
            e = e || {};
            e.location && Util.extend(e, c(e.location));
            e.bounds && Util.extend(e, a(e.bounds));
            d && (e.useMapCenter && Util.extend(e, c(d.getCenter())),
            e.useMapBounds && Util.extend(e, a(d.getBounds())));
            var f = KeywordSearch(b, function(a, b) {
                var c, d;

                if (a) {
                    //console.log(a.documents);
                    let accidents = [];
                    if (navigator.geolocation) { // GPS를 지원하면
                        navigator.geolocation.getCurrentPosition(function(position) {
                          lat = position.coords.latitude;
                          lng = position.coords.longitude;
                          console.log(position.coords.latitude + ' ' + position.coords.longitude);
                          $.ajax({
                            url: "http://localhost/apis/nearkm.do?latitude=" + lat + "&longitude=" + lng,
                            type: "GET",
                            origin: "http://127.0.0.1:3000",
                            success: function(result) {
                                let occurSum = 0;
                                let casltSum = 0;
                                let dprSum = 0;
                                let serSum = 0;
                                let sltSum = 0;
                                let injSum = 0;
                                let jaywalk_occurSum = 0;
                                let jaywalk_casltSum = 0;
                                let jaywalk_dprSum = 0;
                                let jaywalk_serSum = 0;
                                let jaywalk_sltSum = 0;
                                let jaywalk_injSum = 0;
                                let old_occurSum = 0;
                                let old_casltSum = 0;
                                let old_dprSum = 0;
                                let old_serSum = 0;
                                let old_sltSum = 0;
                                let old_injSum = 0;
                                let child_occurSum = 0;
                                let child_casltSum = 0;
                                let child_dprSum = 0;
                                let child_serSum = 0;
                                let child_sltSum = 0;
                                let child_injSum = 0;
                                let school_occurSum = 0;
                                let school_casltSum = 0;
                                let school_dprSum = 0;
                                let school_serSum = 0;
                                let school_sltSum = 0;
                                let school_injSum = 0;
                                let bicycle_occurSum = 0;
                                let bicycle_casltSum = 0;
                                let bicycle_dprSum = 0;
                                let bicycle_serSum = 0;
                                let bicycle_sltSum = 0;
                                let bicycle_injSum = 0;
                                let frozen_occurSum = 0;
                                let frozen_casltSum = 0;
                                let frozen_dprSum = 0;
                                let frozen_serSum = 0;
                                let frozen_sltSum = 0;
                                let frozen_injSum = 0;
                                let drive_occurSum = 0;
                                let drive_casltSum = 0;
                                let drive_dprSum = 0;
                                let drive_serSum = 0;
                                let drive_sltSum = 0;
                                let drive_injSum = 0;
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
                                    occurSum += result[i].sumOfAccidentOccurCnt;
                                    casltSum += result[i].sumOfAccidentCasltCnt;
                                    dprSum += result[i].sumOfAccidentDprCnt;
                                    serSum += result[i].sumOfAccidentSerinjuryCnt;
                                    sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                    injSum += result[i].sumOfAccidentInjuryCnt;
                                    if(result[i].accidentType == "무단횡단"){
                                        jaywalk_occurSum += result[i].sumOfAccidentOccurCnt;
                                        jaywalk_casltSum += result[i].sumOfAccidentCasltCnt;
                                        jaywalk_dprSum += result[i].sumOfAccidentDprCnt;
                                        jaywalk_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                        jaywalk_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                        jaywalk_injSum += result[i].sumOfAccidentInjuryCnt;
                                    }
                                    else if(result[i].accidentType == "보행노인"){
                                        old_occurSum += result[i].sumOfAccidentOccurCnt;
                                        old_casltSum += result[i].sumOfAccidentCasltCnt;
                                        old_dprSum += result[i].sumOfAccidentDprCnt;
                                        old_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                        old_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                        old_injSum += result[i].sumOfAccidentInjuryCnt;
                                    }
                                    else if(result[i].accidentType == "보행어린이"){
                                        child_occurSum += result[i].sumOfAccidentOccurCnt;
                                        child_casltSum += result[i].sumOfAccidentCasltCnt;
                                        child_dprSum += result[i].sumOfAccidentDprCnt;
                                        child_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                        child_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                        child_injSum += result[i].sumOfAccidentInjuryCnt;
                                    }
                                    else if(result[i].accidentType == "스쿨존어린이"){
                                        school_occurSum += result[i].sumOfAccidentOccurCnt;
                                        school_casltSum += result[i].sumOfAccidentCasltCnt;
                                        school_dprSum += result[i].sumOfAccidentDprCnt;
                                        school_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                        school_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                        school_injSum += result[i].sumOfAccidentInjuryCnt;
                                    }
                                    else if(result[i].accidentType == "자전거"){
                                        bicycle_occurSum += result[i].sumOfAccidentOccurCnt;
                                        bicycle_casltSum += result[i].sumOfAccidentCasltCnt;
                                        bicycle_dprSum += result[i].sumOfAccidentDprCnt;
                                        bicycle_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                        bicycle_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                        bicycle_injSum += result[i].sumOfAccidentInjuryCnt;
                                    }
                                    else if(result[i].accidentType == "결빙"){
                                        frozen_occurSum += result[i].sumOfAccidentOccurCnt;
                                        frozen_casltSum += result[i].sumOfAccidentCasltCnt;
                                        frozen_dprSum += result[i].sumOfAccidentDprCnt;
                                        frozen_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                        frozen_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                        frozen_injSum += result[i].sumOfAccidentInjuryCnt;
                                    }
                                    else if(result[i].accidentType == "음주운전"){
                                        drive_occurSum += result[i].sumOfAccidentOccurCnt;
                                        drive_casltSum += result[i].sumOfAccidentCasltCnt;
                                        drive_dprSum += result[i].sumOfAccidentDprCnt;
                                        drive_serSum += result[i].sumOfAccidentSerinjuryCnt;
                                        drive_sltSum += result[i].sumOfAccidentSltinjuryCnt;
                                        drive_injSum += result[i].sumOfAccidentInjuryCnt;
                                    }
                                }
                                d = accidents;
                                //d = a.documents;
                                c = d.length === 0 ? STATUS.ZERO_RESULT : STATUS.OK;
                                g(d, c, new Pagination(a.meta,b,f))
                                $("#loading").remove();
                                $(".info-bar").attr("style", "visibility:visible");
                                $(".custom_zoomcontrol").attr("style", "visibility:visible");
                                $("#category").attr("style", "visibility:visible");
                                $(".vis-weather").attr("style", "visibility:visible").
                                css({"width": "auto", "height": "auto", "background-color": "white", "border-radius": "10px", "border" : "3px", 
                                    "justify-content" : "center",
                                    "display": "flex", "flex-direction": "row", 
                                    "position": "absolute", "top": "10px", "right" : "40vw" ,"box-shadow": "rgba(0, 0, 0, 0.2) 2px 1px 5px", "z-index": "3",
                                    "align-items" : "center"
                                });
                                $(".locationBtn").attr("style", "visibility:visible");
                                $(".sum_accidents").html("");
                                $(".sum_accidents").append(
                                `
                                    <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${occurSum}, 사상자 수: ${casltSum}, 사망자 수: ${dprSum}, 중상자 수: ${serSum}, 경상자 수: ${sltSum}, 부상자 수: ${injSum}</p>
                                `
                                );
                                $(".jaywalk").off('click');
                                $(".old").off('click');
                                $(".child").off('click');
                                $(".school").off('click');
                                $(".frozen").off('click');
                                $(".drive").off('click');
                                $(".jaywalk").on('click', function() {
                                    $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/walk_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                    $(".accident_option_item").attr("style", "visibility:visible");
                                
                                    $(".보행노인").parent().parent().attr("style", "display:none");
                                    $(".보행노인사고").parent().parent().attr("style", "display:none");
                                    $(".보행어린이").parent().parent().attr("style", "display:none");
                                    $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                    $(".자전거").parent().parent().attr("style", "display:none");
                                    $(".결빙").parent().parent().attr("style", "display:none");
                                    $(".음주운전").parent().parent().attr("style", "display:none");
                                    $(".무단횡단").parent().parent().attr("style", "display:block");
    
                                    $(".sum_accidents").html("");
                                    $(".sum_accidents").append(
                                    `
                                        <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${jaywalk_occurSum}, 사상자 수: ${jaywalk_casltSum}, 사망자 수: ${jaywalk_dprSum}, 중상자 수: ${jaywalk_serSum}, 경상자 수: ${jaywalk_sltSum}, 부상자 수: ${jaywalk_injSum}</p>
                                    `
                                    );
                                });
                                
                                $(".old").on('click', function() {
                                    $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/old_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                    $(".accident_option_item").attr("style", "visibility:visible");
                                
                                    $(".보행어린이").parent().parent().attr("style", "display:none");
                                    $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                    $(".자전거").parent().parent().attr("style", "display:none");
                                    $(".결빙").parent().parent().attr("style", "display:none");
                                    $(".음주운전").parent().parent().attr("style", "display:none");
                                    $(".무단횡단").parent().parent().attr("style", "display:none");
                                    $(".보행노인").parent().parent().attr("style", "display:block");
                                    $(".보행노인사고").parent().parent().attr("style", "display:block");
                                    $(".sum_accidents").html("");
                                    $(".sum_accidents").append(
                                    `
                                        <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${old_occurSum}, 사상자 수: ${old_casltSum}, 사망자 수: ${old_dprSum}, 중상자 수: ${old_serSum}, 경상자 수: ${old_sltSum}, 부상자 수: ${old_injSum}</p>
                                    `
                                    );
                                });
                                
                                $(".child").on('click', function() {
                                    $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/child_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                    $(".accident_option_item").attr("style", "visibility:visible");
                                
                                    $(".보행노인").parent().parent().attr("style", "display:none");
                                    $(".보행노인사고").parent().parent().attr("style", "display:none");
                                    $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                    $(".자전거").parent().parent().attr("style", "display:none");
                                    $(".결빙").parent().parent().attr("style", "display:none");
                                    $(".음주운전").parent().parent().attr("style", "display:none");
                                    $(".무단횡단").parent().parent().attr("style", "display:none");
                                    $(".보행어린이").parent().parent().attr("style", "display:block");
                                    $(".sum_accidents").html("");
                                    $(".sum_accidents").append(
                                    `
                                        <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${child_occurSum}, 사상자 수: ${child_casltSum}, 사망자 수: ${child_dprSum}, 중상자 수: ${child_serSum}, 경상자 수: ${child_sltSum}, 부상자 수: ${child_injSum}</p>
                                    `
                                    );
                                });
                                
                                $(".school").on('click', function() {
                                    $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/schoolzone_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                    $(".accident_option_item").attr("style", "visibility:visible");
                                
                                    $(".보행노인").parent().parent().attr("style", "display:none");
                                    $(".보행노인사고").parent().parent().attr("style", "display:none");
                                    $(".자전거").parent().parent().attr("style", "display:none");
                                    $(".결빙").parent().parent().attr("style", "display:none");
                                    $(".음주운전").parent().parent().attr("style", "display:none");
                                    $(".무단횡단").parent().parent().attr("style", "display:none");
                                    $(".보행어린이").parent().parent().attr("style", "display:none");
                                    $(".스쿨존어린이").parent().parent().attr("style", "display:block");
                                    $(".sum_accidents").html("");
                                    $(".sum_accidents").append(
                                    `
                                        <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${school_occurSum}, 사상자 수: ${school_casltSum}, 사망자 수: ${school_dprSum}, 중상자 수: ${school_serSum}, 경상자 수: ${school_sltSum}, 부상자 수: ${school_injSum}</p>
                                    `
                                    );
                                });
                                
                                $(".frozen").on('click', function() {
                                    $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/frozen_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                    $(".accident_option_item").attr("style", "visibility:visible");
                                
                                    $(".보행노인").parent().parent().attr("style", "display:none");
                                    $(".보행노인사고").parent().parent().attr("style", "display:none");
                                    $(".자전거").parent().parent().attr("style", "display:none");
                                    $(".음주운전").parent().parent().attr("style", "display:none");
                                    $(".무단횡단").parent().parent().attr("style", "display:none");
                                    $(".보행어린이").parent().parent().attr("style", "display:none");
                                    $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                    $(".결빙").parent().parent().attr("style", "display:block");
                                    $(".sum_accidents").html("");
                                    $(".sum_accidents").append(
                                    `
                                        <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${frozen_occurSum}, 사상자 수: ${frozen_casltSum}, 사망자 수: ${frozen_dprSum}, 중상자 수: ${frozen_serSum}, 경상자 수: ${frozen_sltSum}, 부상자 수: ${frozen_injSum}</p>
                                    `
                                    );
                                });
                                
                                $(".drive").on('click', function() {
                                    $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/bicycle_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/drive_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                    $(".accident_option_item").attr("style", "visibility:visible");
                                
                                    $(".보행어린이").parent().parent().attr("style", "display:none");
                                    $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                    $(".자전거").parent().parent().attr("style", "display:none");
                                    $(".결빙").parent().parent().attr("style", "display:none");
                                    $(".무단횡단").parent().parent().attr("style", "display:none");
                                    $(".보행노인").parent().parent().attr("style", "display:none");
                                    $(".보행노인사고").parent().parent().attr("style", "display:none");
                                    $(".음주운전").parent().parent().attr("style", "display:block");
                                    $(".sum_accidents").html("");
                                    $(".sum_accidents").append(
                                    `
                                        <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${drive_occurSum}, 사상자 수: ${drive_casltSum}, 사망자 수: ${drive_dprSum}, 중상자 수: ${drive_serSum}, 경상자 수: ${drive_sltSum}, 부상자 수: ${drive_injSum}</p>
                                    `
                                    );
                                });
                                
                                $(".bicycle").on('click', function() {
                                    $("img[src^='/img/walk_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/old_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/child_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/schoolzone_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/frozen_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/drive_accident.png']").css({"display" : "none"});
                                    $("img[src^='/img/bicycle_accident.png']").css({"display": "block", "width" : "36px", "height" : "37px"});
                                    $(".accident_option_item").attr("style", "visibility:visible");
                                
                                    $(".보행어린이").parent().parent().attr("style", "display:none");
                                    $(".스쿨존어린이").parent().parent().attr("style", "display:none");
                                    $(".결빙").parent().parent().attr("style", "display:none");
                                    $(".음주운전").parent().parent().attr("style", "display:none");
                                    $(".무단횡단").parent().parent().attr("style", "display:none");
                                    $(".보행노인").parent().parent().attr("style", "display:none");
                                    $(".보행노인사고").parent().parent().attr("style", "display:none");
                                    $(".자전거").parent().parent().attr("style", "display:block");
                                    $(".sum_accidents").html("");
                                    $(".sum_accidents").append(
                                    `
                                        <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${bicycle_occurSum}, 사상자 수: ${bicycle_casltSum}, 사망자 수: ${bicycle_dprSum}, 중상자 수: ${bicycle_serSum}, 경상자 수: ${bicycle_sltSum}, 부상자 수: ${bicycle_injSum}</p>
                                    `
                                    );
                                });
                                
                                $(".allType").on('click', function() {
                                    $("img[src^='/img/walk_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                    $("img[src^='/img/old_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                    $("img[src^='/img/child_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                    $("img[src^='/img/schoolzone_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                    $("img[src^='/img/frozen_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                    $("img[src^='/img/drive_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                    $("img[src^='/img/bicycle_accident.png']").attr("style", "visibility:visible").css({"width" : "36px", "height" : "37px"});
                                    $(".accident_option_item").attr("style", "visibility:visible");
                                
                                    $(".보행어린이").parent().parent().attr("style", "display:block");
                                    $(".스쿨존어린이").parent().parent().attr("style", "display:block");
                                    $(".결빙").parent().parent().attr("style", "display:block");
                                    $(".음주운전").parent().parent().attr("style", "display:block");
                                    $(".무단횡단").parent().parent().attr("style", "display:block");
                                    $(".보행노인").parent().parent().attr("style", "display:block");
                                    $(".보행노인사고").parent().parent().attr("style", "display:block");
                                    $(".자전거").parent().parent().attr("style", "display:block");
                                    $(".sum_accidents").html("");
                                    $(".sum_accidents").append(
                                    `
                                        <p style="color: black; margin: 0px; font-size: 15px; font-weight: 600;">발생 건수: ${occurSum}, 사상자 수: ${casltSum}, 사망자 수: ${dprSum}, 중상자 수: ${serSum}, 경상자 수: ${sltSum}, 부상자 수: ${injSum}</p>
                                    `
                                    );
                                });
                            },
                            error: function(e) {
                                console.log(e);
                            }
                        });
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
                } else
                    g(STATUS.ERROR, null, null)
            });
            f(e)
        }
        ;
        this.categorySearch = function(b, g, e) {
            e = e || {};
            e.location && Util.extend(e, c(e.location));
            e.bounds && Util.extend(e, a(e.bounds));
            d && (e.useMapCenter && Util.extend(e, c(d.getCenter())),
            e.useMapBounds && Util.extend(e, a(d.getBounds())));
            var f = CategorySearch(b, function(a, b) {
                var c, d;
                if (a) {
                    d = a.documents;
                    c = d.length === 0 ? STATUS.ZERO_RESULT : STATUS.OK;
                    g(d, c, new Pagination(a.meta,b,f))
                } else
                    g(STATUS.ERROR, null, null)
            });
            f(e)
        }
    }
    ;var w = window
      , w = w.daum = w.daum || {}
      , w = w.maps = w.maps || {}
      , w = w.services = w.services || {};
    w.Status = STATUS;
    w.SortBy = SORT_BY;
    w.Coords = COORDS;
    w.AnalyzeType = ANALYZE_TYPE;
    w.Places = Places;
    w.Geocoder = Geocoder;
}
)(window);
