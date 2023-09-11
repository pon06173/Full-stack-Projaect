<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login.jsp</title>
</head>
<body>

<h1>Login page</h1>
<form action="login.do" method="POST">
	<fieldset>
	<legend>Login</legend>
	User name : <input type="text" name="username" value="user01" /><br />
	Password : <input type="password" name="password" value="12345" /><br />
	<input type="submit" value="Login" /></fieldset>
</form>

</body>
</html>