$(document).ready(function (){
    $("#search-box").on('keyup', function (e) {
        if (e.key === 'Enter') {
            $("#search-btn").click();
        }
    });

   $("#search-btn").click(function (){
       let query = $("#search-box").val();

           $.get("/apis/user/search?query=" + query, function (data) {
               let title = data.title;
               let imgUrl = data.imgUrl;
               let resultCode = data.resultCode;
               let category = data.category;
               let addr = data.addr;
               let roadAddr = data.roadAddr;
               let homepage = data.homepage;

               $("#image").attr("src", imgUrl);
               $("#title").text(title);
               $("#category").text(category);
               $("#addr").text(addr);
               $("#road-addr").text(roadAddr);
               $("#homepage").text(homepage);

               $("#add-btn").attr("data-title", title);
               $("#add-btn").attr("data-category", category);
               $("#add-btn").attr("data-roadAddr", roadAddr);
               $("#add-btn").attr("data-homepage", homepage);

               $("#result").attr("style", "visible");
           })
   })

    $("#add-btn").click(function (){

    })


});