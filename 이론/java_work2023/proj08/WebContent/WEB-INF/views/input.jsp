<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>전화 번호 등록</h1>
<form action="input.phone" method="POST">
	<table>
	<tr>
		<th>성명</th>
		<td><input type="text" name="name" value="김범준"></td>
	</tr>
	<tr>
		<th>전화</th>
		<td><input type="text" name="phone" value="010-1234-5678"></td>
	</tr>
	<tr>
		<td colspan="2"><input type="submit" value="저장"></td>
	</tr>
	</table>
	<a href="list.phone">목록</a>
</form>

</body>
</html>