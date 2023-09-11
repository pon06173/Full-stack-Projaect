<%@page import="org.comstudy.myapp.model.Phone"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Enumeration"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<style>
li {
	display: inline-block;
}
.custom-ul {
        padding: 0; /* Remove default padding */
        margin: 0px; /* Add negative margin to move the list to the left */
    }
</style>
<body>
<div class="container">
<h1>전화 번호 목록</h1>
<%
// request, session, application, pageContext에 공통 메소드
//.getAttribute(name);
//.setAttribute(name, o);
//.getAttributeNames();
//Enumeration enumList = request.getAttributeNames();
//while(enumList.hasMoreElements()) {
//	System.out.println(enumList.nextElement());
//}

// setAttribute로 저장된 데이터는 모두 Object타입이다.
// 다시 getAttribute 해서 사용 하려면 다운캐스팅 해야 한다.
ArrayList<Phone> list = (ArrayList<Phone>)request.getAttribute("list");
%>
<hr />
<form id="search-form" method="GET">
            <div class="form-group row">
                <label for="nameToSearch" class="col-sm-2 col-form-label">이름:</label>
                <div class="col-sm-5"> <!-- Adjusted column class to col-sm-9 -->
                    <input type="text" class="form-control" id="nameToSearch" name="nameToSearch" value="${param.nameToSearch}">
                </div>
                <div class="col-sm-2"> <!-- Adjusted column class to col-sm-1 -->
                    <button type="submit" class="btn btn-primary">검색</button>
                </div>
            </div>
        </form>
<hr />
<table width="90%" border="1">
<%
for(Phone phone : list) {
	out.println(phone.toRow());
}
%>

</table>
<hr />
<ul class="custom-ul">
	<li>
    <a href="input.phone">
        <button type="button" class="btn btn-success">전화번호 등록</button>
    </a>
    |
</li>
	<li>
	<a href="list.phone">
		<button type="button" class="btn btn-info">목록</button>
	</a>
	</li>
</ul>
 </div>

</body>
</html>