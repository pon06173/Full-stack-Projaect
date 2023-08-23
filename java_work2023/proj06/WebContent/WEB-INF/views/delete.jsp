<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>전화 번호 삭제</h1>
<p>정말 삭제 하겠습니까?</p>
<form action="delete.phone" method="POST">
	<input type="hidden" name="no" value="<%=request.getAttribute("no")%>"/>
	<input type="submit" value="삭제">
</form>
<a href="list.phone">목록</a>
</body>
</html>