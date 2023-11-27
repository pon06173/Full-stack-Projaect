package com.localhost.roadaccidentinfo.Service;

import com.localhost.roadaccidentinfo.DTO.AccidentDTO;
import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import com.localhost.roadaccidentinfo.Repository.AccidentRepository;
import com.localhost.roadaccidentinfo.Repository.AccidentTypeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class AccidentIndividuallyService {
    private final AccidentRepository accidentRepository;
    private final AccidentTypeRepository accidentTypeRepository;

    private final AreaService areaService;
    private final MapPlaceService mapPlaceService;
    private final AccidentTypeService accidentTypeService;

    private String [] freezingYearCd = {"2022082", "2021029", "2020036", "2019079", "2018091"};
    private String [] drunkYearCd = {"2023018", "2022051"};
    private String [] sidoList = {"11", "26", "27", "28", "29", "30", "31", "36", "41", "42", "43", "44", "45", "46", "47", "48", "50"};
    private String [] seoulList = {"680", "740", "305", "500", "620", "215", "530", "545", "350", "320", "230", "590", "440", "410", "650", "200", "290", "710", "470", "560", "170", "380", "110", "140", "260"};
    private String [] busanList = {"440", "410", "710", "290", "170", "260", "230", "320", "530", "380", "140", "500", "470", "200", "110", "350"};
    private String [] daeguList = {"200", "290", "710", "140", "230", "170", "260", "110"};
    private String [] incheonList = {"710", "245", "170", "200", "140", "177", "237", "260", "185", "720", "110"};
    private String [] gwangjuList = { "200", "155", "110", "170", "140"};
    private String [] daejeonList = {"230", "110", "170", "200", "140"};
    private String [] ulSanList = {"140", "170", "200", "710", "110"};
    private String [] sejongList = {"110"};
    private String [] gyeonggiList = {"820", "281", "283", "285", "287", "290", "210", "610", "310", "410", "570", "360", "250", "197", "199", "195", "135", "131", "133", "113", "117", "111", "115", "390", "270", "273", "271", "550", "173", "171", "630", "830", "730", "670", "800", "370", "460", "463", "465", "461", "430", "150", "500", "480", "220", "810", "650", "450", "590"};
    private String [] gangwonList = {"150", "820", "170", "230", "210", "800", "830", "750", "130", "810", "770", "780", "110", "190", "760", "720", "790", "730"};
    private String [] chungbukList = {"760", "800", "720", "740", "730", "770", "150", "745", "750", "710", "111", "112", "114", "113", "130"};
    private String [] chungnamList = {"250", "150", "710", "230", "830", "270", "180", "760", "210", "770", "200", "730", "810", "130", "131", "133", "790", "825", "800"};
    private String [] jeonbukList = {"790", "130", "210", "190", "730", "800", "770", "710", "140", "750", "740", "113", "111", "180", "720"};
    private String [] jeonnamList = {"810", "770", "720", "230", "730", "170", "710", "110", "840", "780", "150", "910", "130", "870", "830", "890", "880", "800", "900", "860", "820", "790"};
    private String [] gyeongbukList = {"290", "130", "830", "190", "720", "150", "280", "920", "250", "840", "170", "770", "760", "210", "230", "900", "940", "930", "730", "820", "750", "850", "111", "113"};
    private String [] gyeongnamList = {"310", "880", "820", "250", "840", "160", "270", "240", "860", "332", "330", "720", "170", "190", "740", "110", "125", "127", "123", "121", "129", "220", "850", "730", "870", "890"};
    private String [] jejuList = {"130", "110"};

    private String [][] areaList = {seoulList, busanList, daeguList, incheonList, gwangjuList, daejeonList, ulSanList ,sejongList, gyeonggiList, gangwonList, chungbukList, chungnamList, jeonbukList, jeonnamList, gyeongbukList, gyeongnamList, jejuList};

    private List<String> accidentList = new ArrayList<String>();
    private List<String> accidentListData = new ArrayList<String>();
    private int count = 1;

    //공공데이터 OpenAPI 검색 메소드(검색할 데이터 url을 인자로 받음)
    public String scrapDataFromOpenAPI(String urlStr, String subURL) {
        accidentList = new ArrayList<String>();
        accidentListData = new ArrayList<String>();
        String subStr = subURL;
        try{
            //url 연결
            URL url = new URL(urlStr + subStr);
            System.out.println(url);
            URLConnection connection = url.openConnection();
            connection.setDoOutput(true); // POST데이터 넘겨받기 true 설정

            // 타입설정(text/xml) 형식으로 전송 (Request Body 전달시 text/xml로 서버에 전달.)
            connection.setRequestProperty("CONTENT-TYPE","text/xml");

            //openStream() : URL페이지 정보를 읽어온다.
            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream(),"utf-8"));
            String inputLine;
            String buffer = "";

            // 페이지의 정보를 저장한다.
            while ((inputLine = in.readLine()) != null){
                buffer += inputLine.trim();
            }
            in.close();
            return buffer;
        }
        catch(Exception e){
            e.printStackTrace();
            return "";
        }
    }

    public void searchAndCreateIndividuallyAccidentList(String url, String key, String type){
        String key1 = key;
        String apiUrl = url;
        String typeName = type;
        System.out.println("여기는 IndividuallyService입니다");
        String urlStr = apiUrl + key1;
        String subStr;
        String [] currYearCd = freezingYearCd;
        if(type.equals("결빙")){
            currYearCd = freezingYearCd;
        }
        else if(type.equals("음주운전")){
            currYearCd = drunkYearCd;
        }


        for(int i=0; i<sidoList.length; i++){
            String currSido = sidoList[i];
            //System.out.println("현재 시도: " + currSido);
            String [] currGunList = areaList[i];
            //System.out.println("현재 구군 리스트: " + currGunList);
            for(int k=0; k<currGunList.length; k++){
                //System.out.println("카운트: " + count);
                String currGun = currGunList[k];
                //System.out.println("현재 구군: " + currGun);
                for(int l=0; l<currYearCd.length; l++){
                    System.out.println(count);
                    String currYear = currYearCd[l];
                    //System.out.println("현재 년도: " + currYear);
                    subStr = "&siDo=" + currSido + "&guGun="+ currGun + "&searchYearCd=" + currYear;
                    System.out.println(urlStr + subStr);
                    String buffer = scrapDataFromOpenAPI(urlStr, subStr);
                    JSONObject json = XML.toJSONObject(buffer);
                    System.out.println(json.toString(4));

                    JSONObject response = (JSONObject)json.get("response");
                    JSONObject body = (JSONObject) response.get("body");
                    JSONObject items = (JSONObject) body.get("items");

                    JSONArray infoArr = new JSONArray();
                    if(items.get("item") instanceof JSONObject){
                        System.out.println("한개짜리 JSONObject");
                        JSONObject infoItem = (JSONObject) items.get("item");
                        infoArr.put(infoItem);
                    }
                    else if(items.get("item") instanceof JSONArray){
                        System.out.println("여러개짜리 JSONArray");
                        infoArr = (JSONArray) items.get("item");
                    }

                    System.out.println(infoArr.toString(4));

                    for(int m=0; m< infoArr.length(); m++){
                        JSONObject tmp = (JSONObject)infoArr.get(m);
                        String accidentType = typeName;
                        String accidentArea = (String)tmp.get("sido_sgg_nm");
                        String accidentAddress = (String)tmp.get("spot_nm");
                        Integer accidentYear = (Integer)tmp.get("afos_id");
                        if(accidentYear == 2022082){
                            accidentYear = 2021;
                        }
                        else if(accidentYear == 2021029){
                            accidentYear = 2020;
                        }
                        else if(accidentYear == 2020036){
                            accidentYear = 2019;
                        }
                        else if(accidentYear == 2019079){
                            accidentYear = 2018;
                        }
                        else if(accidentYear == 2018091){
                            accidentYear = 2017;
                        }
                        else if(accidentYear == 2023018){
                            accidentYear = 2022;
                        }
                        else if(accidentYear == 2022051){
                            accidentYear = 2021;
                        }


                        Integer sumOfAccidentOccurCnt = (Integer)tmp.get("occrrnc_cnt");
                        Integer sumOfAccidentCasltCnt = (Integer)tmp.get("caslt_cnt");
                        Integer sumOfAccidentDprCnt = (Integer)tmp.get("dth_dnv_cnt");
                        Integer sumOfAccidentSerinjuryCnt = (Integer)tmp.get("se_dnv_cnt");
                        Integer sumOfAccidentSltinjuryCnt = (Integer)tmp.get("sl_dnv_cnt");
                        Integer sumOfAccidentInjuryCnt = (Integer)tmp.get("wnd_dnv_cnt");

                        BigDecimal latitude = (BigDecimal)tmp.get("la_crd");
                        BigDecimal longitude = (BigDecimal)tmp.get("lo_crd");
                        latitude = latitude.setScale(7, BigDecimal.ROUND_UP);
                        longitude = longitude.setScale(7, BigDecimal.ROUND_UP);


                        AccidentDTO accidentDTO = AccidentDTO.builder()
                                .accidentIdx((long) count)
                                .accidentType(accidentType)
                                .accidentArea(accidentArea)
                                .mapPlaceAddress(accidentAddress)
                                .accidentYear(accidentYear)
                                .sumOfAccidentOccurCnt(sumOfAccidentOccurCnt)
                                .sumOfAccidentCasltCnt(sumOfAccidentCasltCnt)
                                .sumOfAccidentDprCnt(sumOfAccidentDprCnt)
                                .sumOfAccidentSerinjuryCnt(sumOfAccidentSerinjuryCnt)
                                .sumOfAccidentSltinjuryCnt(sumOfAccidentSltinjuryCnt)
                                .sumOfAccidentInjuryCnt(sumOfAccidentInjuryCnt)
                                .latitude(latitude)
                                .longitude(longitude)
                                .build();
                        System.out.println(accidentDTO);
                        saveAccidentData(accidentDTO);
                        count++;
                    }
                }
            }

        }
    }

    public AccidentDTO saveAccidentData(AccidentDTO dto){
        var entity = accidentRepository.save(AccidentDtoToEntity(dto));
        return AccidentEntityToDTO(entity);
    }

    public AccidentDTO AccidentEntityToDTO (AccidentEntity accidentEntity) {

        String accidentType = accidentTypeRepository.findByIdx(accidentEntity.getAccidentTypeIdx()).getAccidentTypeName();

        return AccidentDTO.builder()
                .accidentIdx(accidentEntity.getIdx())
                .accidentType(accidentType)
                .accidentArea(accidentEntity.getAccidentArea())
                .mapPlaceAddress(accidentEntity.getMapPlaceAddress())
                .accidentYear(accidentEntity.getAccidentYear())
                .sumOfAccidentOccurCnt(accidentEntity.getSumOfAccidentOccurCnt())
                .sumOfAccidentCasltCnt(accidentEntity.getSumOfAccidentCasltCnt())
                .sumOfAccidentDprCnt(accidentEntity.getSumOfAccidentDprCnt())
                .sumOfAccidentSerinjuryCnt(accidentEntity.getSumOfAccidentSerinjuryCnt())
                .sumOfAccidentSltinjuryCnt(accidentEntity.getSumOfAccidentSltinjuryCnt())
                .sumOfAccidentInjuryCnt(accidentEntity.getSumOfAccidentInjuryCnt())
                .latitude(accidentEntity.getLatitude())
                .longitude(accidentEntity.getLongitude())
                .build();
    }

    public AccidentEntity AccidentDtoToEntity (AccidentDTO accidentDTO) {

        Long accidentTypeIdx = accidentTypeRepository.findByAccidentTypeName(accidentDTO.getAccidentType()).getIdx();

        return AccidentEntity.builder()
                .accidentTypeIdx(accidentTypeIdx)
                .accidentArea(accidentDTO.getAccidentArea())
                .mapPlaceAddress(accidentDTO.getMapPlaceAddress())
                .accidentYear(accidentDTO.getAccidentYear())
                .sumOfAccidentOccurCnt(accidentDTO.getSumOfAccidentOccurCnt())
                .sumOfAccidentCasltCnt(accidentDTO.getSumOfAccidentCasltCnt())
                .sumOfAccidentDprCnt(accidentDTO.getSumOfAccidentDprCnt())
                .sumOfAccidentSerinjuryCnt(accidentDTO.getSumOfAccidentSerinjuryCnt())
                .sumOfAccidentSltinjuryCnt(accidentDTO.getSumOfAccidentSltinjuryCnt())
                .sumOfAccidentInjuryCnt(accidentDTO.getSumOfAccidentInjuryCnt())
                .latitude(accidentDTO.getLatitude())
                .longitude(accidentDTO.getLongitude())
                .build();
    }

}
