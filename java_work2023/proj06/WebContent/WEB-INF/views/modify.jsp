<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>전화 번호 수정</h1>
<form action="modify.phone" method="POST">
	<table>
	<tr>
		<th>NO</th>
		<td><input type="hidden" name="no" value="%d">%d</td>
	</tr>
	<tr>
		<th>성명</th>
		<td><input type="text" name="name" value="%s"></td>
	</tr>
	<tr>
		<th>성명</th>
		<td><input type="text" name="phone" value="%s"></td>
	</tr>
	<tr>
		<td colspan="2"><input type="submit" value="수정"></td>
	</tr>
	</table>
	<a href="list.phone">목록</a>
</form>

</body>
</html>