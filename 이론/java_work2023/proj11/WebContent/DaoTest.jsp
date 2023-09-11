<%@page import="org.comstudy.myapp.model.Phone"%>
<%@page import="java.util.List"%>
<%@page import="org.comstudy.myapp.model.PhoneDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
PhoneDAO dao = new PhoneDAO();

Phone dto = new Phone(2);
//Phone phone = dao.selectOne(dto);
//out.println(콜);

//dto = new Phone("test","test@test.com");
//dao.insert(dto);

dto = new Phone(5, "test2","test2@test.com");
dao.update(dto);

// 결과 확인
List<Phone> list = dao.selectAll();
for(Phone p : list) {
   out.println(p + "<br>");
}
%>

</body>
</html>