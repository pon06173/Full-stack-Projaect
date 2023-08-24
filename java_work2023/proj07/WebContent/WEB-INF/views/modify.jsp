<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.comstudy.myapp.Phone"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>전화 번호 수정</title>
</head>
<body>

<h1>전화 번호 수정</h1>
<form action="modify.phone" method="POST">
    <table>
    <tr>
        <th>NO</th>
        <td><input type="hidden" name="no" value="<%= ((Phone) request.getAttribute("phone")).getNo() %>"><%= ((Phone) request.getAttribute("phone")).getNo() %></td>
    </tr>
    <tr>
        <th>성명</th>
        <td><input type="text" name="name" value="<%= ((Phone) request.getAttribute("phone")).getName() %>"></td>
    </tr>
    <tr>
        <th>전화 번호</th>
        <td><input type="text" name="phone" value="<%= ((Phone) request.getAttribute("phone")).getPhone() %>"></td>
    </tr>
    <tr>
        <td colspan="2"><input type="submit" value="수정"></td>
    </tr>
    </table>
    <a href="list.phone">목록</a>
</form>

</body>
</html>
