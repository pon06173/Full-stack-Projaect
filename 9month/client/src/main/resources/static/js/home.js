let sB = $("#searchBox");

$("#searchButton").on("click", function() {
    // 상자에 값 없으면
    if(sB.val() === "")  {
        alert("검색어를 입력하세요");
    }
    else{
        // AJAX 통신
        $.ajax({
            url: "http://localhost:80/apis/naverapi?query=" + sB.val() ,
            type: "get",
            dataType: "json",
            success: function(res) {
                //return 된 값 title이 "ERROR: DTO returns NULL"이 아니면
                if(res.title !== "ERROR: DTO returns NULL") {
                    $("#rootDiv").attr("style", "");

                    $("#image").attr("src", res.imageURL);
                    $("#homepage").attr("href", res.homePagelink);

                    $("#title").html("상호명: " + res.title);
                    $("#category").html("분류: " + res.category);
                    $("#addr").html("지번 주소: " + res.addr);
                    $("#road-addr").html("도로명 주소: " + res.roadAddr);
                    $("#homepage").html(res.homePagelink);

                } else { //return된 값 title이 "ERROR: DTO returns NULL"이면
                    alert("검색된 결과가 없습니다.");
                    $("#rootDiv").attr("style", "visibility: hidden;");
                }
            },
            // 오류 발생 시
            error: function(xhr, error, msg) {
                alert("오류가 발생하였습니다.\n" + xhr + "\n" + error + "\n" + msg);
            }
        });
    }
});
