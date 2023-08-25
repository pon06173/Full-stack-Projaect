<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>${title }</h1>
<form action="modify.phone" method="POST">
	<table>
	<tr>
		<th>NO</th>
		<td><input type="hidden" name="no" value="${phone.no }">${phone.no }</td>
	</tr>
	<tr>
		<th>성명</th>
		<td><input type="text" name="name" value="${phone.name }"></td>
	</tr>
	<tr>
		<th>전화</th>
		<td><input type="text" name="phone" value="${phone.phone }"></td>
	</tr>
	<tr>
		<td colspan="2"><input type="submit" value="수정"></td>
	</tr>
	</table>
	<a href="list.phone">목록</a>
</form>

</body>
</html>