package com.localhost.roadaccidentinfo.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.localhost.roadaccidentinfo.DTO.AccidentDTO;
import com.localhost.roadaccidentinfo.Entity.AccidentEntity;
import com.localhost.roadaccidentinfo.Entity.AccidentTypeEntity;
import com.localhost.roadaccidentinfo.Repository.AccidentRepository;
import com.localhost.roadaccidentinfo.Repository.AccidentTypeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.math.BigDecimal;
import java.net.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class WeatherService {
    public String resultWeather(String resultObject){
        return resultObject;
    }


    public String restApiGetWeather(String apiType, String time, int x, int y, String area) throws Exception {
        /*
            @ API LIST ~

            getUltraSrtNcst 초단기실황조회
            getUltraSrtFcst 초단기예보조회
            getVilageFcst 동네예보조회
            getFcstVersion 예보버전조회
        */
        int index = LocalDateTime.now().toString().indexOf("T");
        String time1 = LocalDateTime.now().toString().substring(index + 1);
        int index2 = time1.indexOf(":");
        String time2 = time1.substring(0, index2);
        int timeNumber = Integer.parseInt(time2);
        System.out.println(timeNumber);

        int index3 = LocalDateTime.now().toString().indexOf("-");
        String timeYear = LocalDateTime.now().toString().substring(0, index3);
        String timeMonthString = LocalDateTime.now().toString().substring(index3+1);
        int index4 = timeMonthString.indexOf("-");
        String timeMonth = timeMonthString.substring(0, index4);
        String timeDayString = timeMonthString.substring(index4+1);
        int index5 = timeDayString.indexOf("T");
        String timeDay = timeDayString.substring(0, index5);
        String baseDate = timeYear + timeMonth + timeDay;
        System.out.println(timeYear + timeMonth + timeDay);
        System.out.println(time);

        if(timeNumber <= 4){
            int dateNumber = Integer.valueOf(baseDate);
            dateNumber -= 1;
            baseDate = String.valueOf(dateNumber);
            System.out.println(baseDate);

        }
        if(apiType.equals("getVilageFcst")){
            String url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/" + apiType
                    + "?serviceKey=Mj031aseKixU1oDYhbqZiZZXq5m7XpiOqF9o3xPl6Eg4HF9rxkaY7fkLHkimjj75GXZC9NVUcTMO1Qa3W2QWSQ%3D%3D"
                    + "&dataType=JSON"            // JSON, XML
                    + "&numOfRows=1000"             // 페이지 ROWS
                    + "&pageNo=1"                 // 페이지 번호
                    + "&base_date=" + baseDate       // 발표일자
                    + "&base_time=" + time           // 발표시각
                    + "&nx=" + x                    // 예보지점 X 좌표
                    + "&ny=" + y;                  // 예보지점 Y 좌표

            HashMap<String, Object> resultMap = getDataFromJson(url, "UTF-8", "get", "");

            JSONObject jsonObj = new JSONObject();

            jsonObj.put("result", resultMap);
            JSONObject result = (JSONObject)jsonObj.get("result");
            JSONObject response = (JSONObject)result.get("response");
            JSONObject body = (JSONObject)response.get("body");
            JSONObject items = (JSONObject)body.get("items");
            JSONArray infoArr = (JSONArray) items.get("item"); // 각 데이터 행 정보 저장할 JSON 배열

            JSONArray weatherList = new JSONArray();
            String skyStatus = "";
            if(timeNumber <= 0){
                time2 = "0000";
            }
            else if(timeNumber <= 10) {
                time2 = "0" + (timeNumber - 1) + "00";
            }
            else{
                time2 = (timeNumber - 1) + "00";
            }
            for(int i=0; i<infoArr.length(); i++){
                JSONObject item = (JSONObject)infoArr.get(i);
                String fcstTime = (String)item.get("fcstTime");
                String fcstDate = (String)item.get("fcstDate");
                if(fcstTime.equals(time2)){
                    if(fcstDate.equals(baseDate)){
                        weatherList.put(item);
                    }
                }
            }
            for(int i=0; i<weatherList.length(); i++){
                JSONObject item = (JSONObject)weatherList.get(i);
                String category = (String)item.get("category");
                String fcstValue = (String)item.get("fcstValue");
                String fcstDate = (String)item.get("fcstDate");
                if(category.equals("SKY")){
                    System.out.println("날짜: " + fcstDate);
                    System.out.println("하늘: " + fcstValue);
                    System.out.println(area);
                    if(fcstValue.equals("1")){
                        skyStatus = "맑음";
                    }
                    else if(fcstValue.equals("3")){
                        skyStatus = "구름많음";
                    }
                    else if(fcstValue.equals("4")){
                        skyStatus = "흐림";
                    }
                }
            }

            //System.out.println(weatherList.toString(4));
            return "지역: " + area + ", 하늘 상태: " + skyStatus + ", ";
        }
        else if(apiType.equals("getUltraSrtNcst")){
            String url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/" + apiType
                    + "?serviceKey=Mj031aseKixU1oDYhbqZiZZXq5m7XpiOqF9o3xPl6Eg4HF9rxkaY7fkLHkimjj75GXZC9NVUcTMO1Qa3W2QWSQ%3D%3D"
                    + "&dataType=JSON"            // JSON, XML
                    + "&numOfRows=277"             // 페이지 ROWS
                    + "&pageNo=1"                 // 페이지 번호
                    + "&base_date=" + baseDate       // 발표일자
                    + "&base_time=" + time           // 발표시각
                    + "&nx=" + x                    // 예보지점 X 좌표
                    + "&ny=" + y;                  // 예보지점 Y 좌표

            HashMap<String, Object> resultMap = getDataFromJson(url, "UTF-8", "get", "");

            JSONObject jsonObj = new JSONObject();

            jsonObj.put("result", resultMap);
            JSONObject result = (JSONObject)jsonObj.get("result");
            JSONObject response = (JSONObject)result.get("response");
            JSONObject body = (JSONObject)response.get("body");
            JSONObject items = (JSONObject)body.get("items");
            JSONArray infoArr = (JSONArray) items.get("item"); // 각 데이터 행 정보 저장할 JSON 배열
            //System.out.println(infoArr.toString(4));

            String temper = "";
            String rainStatus = "";
            for(int i=0; i<infoArr.length(); i++){
                JSONObject item = (JSONObject)infoArr.get(i);
                String category = (String)item.get("category");
                String obsrValue = (String)item.get("obsrValue");
                if(category.equals("T1H")){
                    temper = obsrValue;
                }
                else if(category.equals("PTY")){
                    if(obsrValue.equals("0")){
                        rainStatus = "없음";
                    }
                    else if(obsrValue.equals("1")){
                        rainStatus = "비";
                    }
                    else if(obsrValue.equals("2")){
                        rainStatus = "비/눈";
                    }
                    else if(obsrValue.equals("3")){
                        rainStatus = "눈";
                    }
                    else if(obsrValue.equals("5")){
                        rainStatus = "빗방울";
                    }
                    else if(obsrValue.equals("6")){
                        rainStatus = "빗방울눈날림";
                    }
                    else if(obsrValue.equals("7")){
                        rainStatus = "눈날림";
                    }
                }
            }

            return "현재 기온: " + temper + ", 강수 상태: " + rainStatus;
        }
        else{
            return "잘못된 API Type";
        }
    }

    public HashMap<String, Object> getDataFromJson(String url, String encoding, String type, String jsonStr) throws Exception {
        boolean isPost = false;

        if ("post".equals(type)) {
            isPost = true;
        } else {
            url = "".equals(jsonStr) ? url : url + "?request=" + jsonStr;
        }

        return getStringFromURL(url, encoding, isPost, jsonStr, "application/json");
    }

    public HashMap<String, Object> getStringFromURL(String url, String encoding, boolean isPost, String parameter, String contentType) throws Exception {
        URL apiURL = new URL(url);

        HttpURLConnection conn = null;
        BufferedReader br = null;
        BufferedWriter bw = null;

        HashMap<String, Object> resultMap = new HashMap<String, Object>();

        try {
            conn = (HttpURLConnection) apiURL.openConnection();
            conn.setConnectTimeout(5000);
            conn.setReadTimeout(5000);
            conn.setDoOutput(true);

            if (isPost) {
                conn.setRequestMethod("POST");
                conn.setRequestProperty("Content-Type", contentType);
                conn.setRequestProperty("Accept", "*/*");
            } else {
                conn.setRequestMethod("GET");
            }

            conn.connect();

            if (isPost) {
                bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream(), "UTF-8"));
                bw.write(parameter);
                bw.flush();
                bw = null;
            }

            br = new BufferedReader(new InputStreamReader(conn.getInputStream(), encoding));

            String line = null;

            StringBuffer result = new StringBuffer();

            while ((line=br.readLine()) != null) result.append(line);

            ObjectMapper mapper = new ObjectMapper();

            resultMap = mapper.readValue(result.toString(), HashMap.class);
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception(url + " interface failed" + e.toString());
        } finally {
            if (br != null) br.close();
            if (bw != null) bw.close();
        }

        return resultMap;
    }
}
