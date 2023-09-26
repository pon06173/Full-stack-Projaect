package com.example.client.dto.Naver;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ReqImageDto {
    private String query;
    @Builder.Default
    private int display = 1;
    @Builder.Default
    private int start = 1;
    @Builder.Default
    private String sort = "sim";
    @Builder.Default
    private String filter = "all";

    public MultiValueMap<String, String> params(){
        var map = new LinkedMultiValueMap<String ,String>();
        map.add("query",query);
        map.add("display", String.valueOf(display));
        map.add("start", String.valueOf(start));
        map.add("sort", sort);
        map.add("filter", filter);
        return map;

    }
}
