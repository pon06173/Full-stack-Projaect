package com.localhost.roadaccidentinfo.Service;

import com.localhost.roadaccidentinfo.DTO.AccidentDTO;
import com.localhost.roadaccidentinfo.DTO.AccidentTypeDTO;
import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import com.localhost.roadaccidentinfo.Entity.AccidentTypeEntity;
import com.localhost.roadaccidentinfo.Entity.MapPlaceEntity;
import com.localhost.roadaccidentinfo.Repository.AccidentRepository;
import com.localhost.roadaccidentinfo.Repository.AccidentTypeRepository;
import com.localhost.roadaccidentinfo.Repository.MapPlaceRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class AccidentService {
    private final AccidentRepository accidentRepository;
    private final AccidentTypeRepository accidentTypeRepository;

    private final AreaService areaService;
    private final MapPlaceService mapPlaceService;
    private final AccidentTypeService accidentTypeService;

    private String key = "Mj031aseKixU1oDYhbqZiZZXq5m7XpiOqF9o3xPl6Eg4HF9rxkaY7fkLHkimjj75GXZC9NVUcTMO1Qa3W2QWSQ%3D%3D";
    private String apiUrl = "http://api.data.go.kr/openapi/tn_pubr_public_acdnt_area_api?serviceKey=" + key;
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
            subStr =  URLEncoder.encode(subURL, "UTF-8");
            URL url = new URL(urlStr + subStr);
            System.out.println(url);
            URLConnection connection = url.openConnection();
            connection.setDoOutput(true);

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

    public void searchAndCreateAccidentList(){
        System.out.println("여기는 AccidentService입니다");
        //공공 데이터 openapi url(with 인증키)
        String urlStr = apiUrl;

        //스크래핑한 xml 데이터 저장
        String buffer = scrapDataFromOpenAPI(urlStr, "");

        //스크래핑한 xml 데이터 json형태로 파싱
        JSONObject json = XML.toJSONObject(buffer);

        //전체 데이터 개수 및 페이지 수 검색
        JSONObject response = (JSONObject)json.get("response");
        JSONObject body = (JSONObject) response.get("body");
        JSONObject items;
        Integer totalCount = (Integer)body.get("totalCount");
        Integer pageCount = (totalCount % 1000 == 0) ? (totalCount / 1000) : ((totalCount / 1000) + 1);
        System.out.println("총 페이지 수: " + pageCount);

        for(int i=1; i <= pageCount; i++){
            urlStr = apiUrl + "&numOfRows=1000&pageNo=" + i;
            String data = scrapDataFromOpenAPI(urlStr, "");
            json = XML.toJSONObject(data);
            response = (JSONObject)json.get("response");
            body = (JSONObject) response.get("body");
            items = (JSONObject) body.get("items");
            org.json.JSONArray infoArr = (org.json.JSONArray) items.get("item"); // 각 데이터 행 정보 저장할 JSON 배열
            for(int j=0; j< infoArr.length(); j++){
                JSONObject tmp = (JSONObject)infoArr.get(j);
                String accidentType = (String)tmp.get("acdntTypeSe");
                String accidentArea = (String)tmp.get("ctprvnSignguNm");
                String accidentAddress = (String)tmp.get("acdntAreaLcNm");
                Integer accidentYear = (Integer)tmp.get("acdntYear");

                Integer sumOfAccidentOccurCnt = (Integer)tmp.get("occrrncCo");
                Integer sumOfAccidentCasltCnt = (Integer)tmp.get("casltCo");
                Integer sumOfAccidentDprCnt = (Integer)tmp.get("deathCo");
                Integer sumOfAccidentSerinjuryCnt = (Integer)tmp.get("swpsnCo");
                Integer sumOfAccidentSltinjuryCnt = (Integer)tmp.get("sinjpsnCo");
                Integer sumOfAccidentInjuryCnt = (Integer)tmp.get("injpsnCo");

                AccidentTypeEntity accidentTypeEntity = accidentTypeRepository.findByAccidentTypeName(accidentType);
                //List<MapPlaceEntity> mapPlaceEntity = mapPlaceRepository.findByAddress(accidentAddress);
                Long accidentIdx = accidentTypeEntity.getIdx();
                //Long mapPlaceIdx = mapPlaceEntity.getIdx();

                BigDecimal latitude = (BigDecimal)tmp.get("latitude");
                BigDecimal longitude = (BigDecimal)tmp.get("longitude");
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

    public List<AccidentDTO> queryAccident(String query) {

        try {
            return entityListToDTO(accidentRepository.findByMapPlaceAddressContains(query));
        } catch (NullPointerException e) {
            return null;
        }
    }

    //AccidentEntity List를 AccidentDTO List로 변환하는 함수
    public List<AccidentDTO> entityListToDTO(List<AccidentEntity> entityList) {
        List<AccidentDTO> dtoList = new ArrayList<>();

        for (AccidentEntity entity: entityList) {
            dtoList.add(AccidentEntityToDTO(entity));
        }

        return dtoList;
    }

    public AccidentDTO queryAccidentByIdx(String query) {

        try {
            Long idx = Long.parseLong(query);
            if(accidentRepository.findByIdx(idx) != null) {
                return AccidentEntityToDTO(accidentRepository.findByIdx(idx));
            }
            return null;
        } catch (NumberFormatException e) {
            return AccidentDTO.builder()
                    .accidentIdx(0L)
                    .build();
        }

    }

    //Type을 받아와 그에 따른 사고 내역을 조회하는 함수
    public List<AccidentDTO> queryByType (String type) {
        Long idx = accidentTypeService.queryTypeIdx(type);

        if(idx != 0L) {
            return entityListToDTO(accidentRepository.findByAccidentTypeIdx(idx));
        }
        return null;
    }

    public List<AccidentDTO> findNear10KM (BigDecimal latitude, BigDecimal longtitude) {
        return entityListToDTO(accidentRepository.findAccidentNear10KM(latitude, longtitude));
    }


    private List<String> areaList = new ArrayList<String>();
    private List<String> areaListData = new ArrayList<String>();
    private List<String> addressList = new ArrayList<String>();
    private List<String> addressListData = new ArrayList<String>();
    public void changeSigunNameFromAccidentList() {
        List<AccidentDTO> accidentList = showAllAccident();
        int list_size = accidentList.size();
        System.out.println("리스트사이즈: " + list_size);
        for(int i=0; i<list_size; i++){
            AccidentDTO accidentItem = accidentList.get(i);
            String item_address = accidentItem.getMapPlaceAddress();
            Long item_idx = accidentItem.getAccidentIdx();
            System.out.println("주소: " + item_address);
            System.out.println("idx: " + item_idx);

            int stringIdx1 = item_address.indexOf(" ");
            String item_address1 = item_address.substring(0, stringIdx1);

            String item_address2 = item_address.substring(stringIdx1+1);
            int stringIdx2 = item_address2.indexOf(" ");
            String item_address3 = item_address2.substring(0, stringIdx2);

            String result_address = item_address1 + " " + item_address3;
            System.out.println(result_address);
            areaList.add(result_address);
            addressList.add(item_address);

            accidentRepository.updateAccidentArea(result_address, item_idx);
        }
        HashSet<String> areas = new HashSet<String>(areaList);
        HashSet<String> addresses = new HashSet<String>(addressList);
        areaListData = new ArrayList<String>(areas);
        addressListData = new ArrayList<String>(addresses);
        System.out.println("총 지역 개수: " + areaListData.size());
        System.out.println(areaListData);

        System.out.println("총 지도 위치 개수: " + addressListData.size());
        System.out.println(addressListData);

        areaService.createAreaListData(areaListData);
        mapPlaceService.createMapPlaceListData(addressListData);

    }

    public AccidentDTO saveAccidentData(AccidentDTO dto){
        var entity = accidentRepository.save(AccidentDtoToEntity(dto));
        return AccidentEntityToDTO(entity);
    }

    public List<AccidentDTO> showAllAccident() {
        return accidentRepository.findAll()
                .stream().map(m->AccidentEntityToDTO(m)).collect(Collectors.toList());
    }

    public AccidentDTO AccidentEntityToDTO (AccidentEntity accidentEntity) {

        String accidentType = accidentTypeRepository.findByIdx(accidentEntity.getAccidentTypeIdx()).getAccidentTypeName();

        String accidentDisplayType = accidentTypeRepository.findByIdx(accidentEntity.getAccidentTypeIdx()).getAccidentTypeDisplayName();

        return AccidentDTO.builder()
                .accidentIdx(accidentEntity.getIdx())
                .accidentType(accidentType)
                .accidentDisplayName(accidentDisplayType)
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
                .idx(accidentDTO.getAccidentIdx())
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
