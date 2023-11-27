package com.localhost.roadaccidentinfo.Controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.localhost.roadaccidentinfo.Service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.databind.ObjectMapper;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://127.0.0.1:3000")
@RequestMapping("/api")
public class WeatherApiController {
    private final WeatherService weatherService;
    private String [] areaNames = {"서울", "부산", "대구", "대전", "광주", "울산", "인천", "경산", "포항", "수원"};
    private int [] xList = {60, 97, 88, 67, 57, 103, 50, 92, 103, 60};
    private int [] yList = {126, 76, 89, 102, 74, 83, 127, 90, 95, 120};

    public List<String> weather(String areaName) throws Exception {
        String resultObject = "";
        List<String> areaList = new ArrayList<String>();
        try{

            for(int i=0; i<areaNames.length; i++){
                if(areaName.equals(areaNames[i])){
                    resultObject = "";
                    String apiType = "getVilageFcst";
                    String time = "0500";
                    String area = areaNames[i];
                    int x = xList[i];
                    int y = yList[i];
                    String jsonObject = weatherService.restApiGetWeather(apiType, time, x, y, area);
                    resultObject = resultObject.concat(jsonObject);

                    apiType = "getUltraSrtNcst";
                    int index = LocalDateTime.now().toString().indexOf("T");
                    String time1 = LocalDateTime.now().toString().substring(index + 1);
                    int index2 = time1.indexOf(":");
                    String time2 = time1.substring(0, index2);
                    int timeNumber = Integer.parseInt(time2);
                    if(timeNumber == 0){
                        time2 = "2300";
                    }
                    else if(timeNumber == 1) {
                        time2 = "0000";
                    }
                    else if(timeNumber <= 10) {
                        time2 = "0" + (timeNumber - 1) + "00";
                    }
                    else{
                        time2 = (timeNumber - 1) + "00";
                    }
                    System.out.println(LocalDateTime.now());
                    System.out.println(time2);
                    jsonObject = weatherService.restApiGetWeather(apiType, time2, x, y, area);
                    resultObject = resultObject.concat(jsonObject);
                    System.out.println(resultObject);
                    areaList.add(resultObject);
                }
            }
            return areaList;
        }
        catch (Exception e){
            areaList.clear();
            List<String> result = weather(areaName);
            return result;
        }
    }

    @GetMapping("/weather")
    public List<String> resultList(@RequestParam String areaName) throws Exception {
        List<String> list = weather(areaName);
        return list;
    }
}