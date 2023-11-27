package com.localhost.roadaccidentinfo.Service;

import com.localhost.roadaccidentinfo.DTO.AccidentDTO;
import com.localhost.roadaccidentinfo.DTO.AccidentTypeDTO;
import com.localhost.roadaccidentinfo.DTO.AreaDTO;
import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import com.localhost.roadaccidentinfo.Entity.AccidentTypeEntity;
import com.localhost.roadaccidentinfo.Repository.AccidentRepository;
import com.localhost.roadaccidentinfo.Repository.AccidentTypeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class AccidentTypeService {

    private final AccidentTypeRepository accidentTypeRepository;


    private String apiUrl = "http://api.data.go.kr/openapi/tn_pubr_public_acdnt_area_api?serviceKey=Mj031aseKixU1oDYhbqZiZZXq5m7XpiOqF9o3xPl6Eg4HF9rxkaY7fkLHkimjj75GXZC9NVUcTMO1Qa3W2QWSQ%3D%3D";
    private List<String> accidentList = new ArrayList<String>();
    private List<String> accidentListData = new ArrayList<String>();

    //공공데이터 OpenAPI 검색 메소드(검색할 데이터 url을 인자로 받음)
    public String scrapDataFromOpenAPI(String urlStr, String subURL) {
        String subStr = subURL;
        try{
            //url 연결
            subStr =  URLEncoder.encode(subURL, "UTF-8");
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

    public void searchAndCreateAccidentTypeList(){
        System.out.println("여기는 AccidentTypeService입니다");
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
            for(int j=0; j<infoArr.length(); j++){
                JSONObject tmp = (JSONObject)infoArr.get(j);
                String accident = (String)tmp.get("acdntTypeSe");
                accidentList.add(accident);
            }
        }
        HashSet<String> accidentHashSet = new HashSet<String>(accidentList);
        accidentListData = new ArrayList<String>(accidentHashSet);
        Collections.sort(accidentListData);
        System.out.println(accidentListData);

        for(String accidentType : accidentListData){
            AccidentTypeDTO accidentTypeItem = AccidentTypeDTO.builder()
                    .accidentTypeName(accidentType)
                    .build();
            saveAccidentTypeData(accidentTypeItem);
        }
        AccidentTypeDTO accidentTypeItem = AccidentTypeDTO.builder()
                .accidentTypeName("결빙")
                .build();
        saveAccidentTypeData(accidentTypeItem);
        accidentTypeItem = AccidentTypeDTO.builder()
                .accidentTypeName("음주운전")
                .build();
        saveAccidentTypeData(accidentTypeItem);
    }

    // 사고 유형의 인덱스를 불러오는 함수
    public Long queryTypeIdx (String type) {
        try {
            return accidentTypeRepository.findByAccidentTypeName(type).getIdx();
        } catch (NullPointerException e) {
            return 0L;
        }
    }


    public AccidentTypeDTO saveAccidentTypeData(AccidentTypeDTO dto){
        var entity = accidentTypeRepository.save(AccidentTypeDtoToEntity(dto));
        return AccidentTypeEntityToDTO(entity);
    }

    public AccidentTypeDTO AccidentTypeEntityToDTO (AccidentTypeEntity accidentTypeEntity) {
        return AccidentTypeDTO.builder()
                .accidentTypeName(accidentTypeEntity.getAccidentTypeName())
                .build();
    }

    public AccidentTypeEntity AccidentTypeDtoToEntity (AccidentTypeDTO accidentTypeDTO) {
        return AccidentTypeEntity.builder()
                .idx(accidentTypeDTO.getAccidentTypeIdx())
                .accidentTypeName(accidentTypeDTO.getAccidentTypeName())
                .build();
    }

}
