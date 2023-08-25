<%@page import="java.sql.Connection"%>
<%@page import="org.comstudy.myapp.JdbcUtil"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JdbcTest.jsp</title>
</head>
<body>

<%
Connection conn = JdbcUtil.getConnection();
out.println(conn);
%>

</body>
</html>