<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>전화 번호 검색</title>
</head>
<body>

<h1>전화 번호 검색</h1>
<form action="search.phone" method="GET">
    <label for="nameToSearch">이름:</label>
    <input type="text" id="nameToSearch" name="nameToSearch" value="${param.nameToSearch}">
    <input type="submit" value="검색">
</form>

<h2>검색 결과:</h2>
<c:forEach var="phone" items="${searchResults}">
    <p>${phone.phone}</p>
</c:forEach>

<a href="list.phone">목록</a>
</body>
</html>
