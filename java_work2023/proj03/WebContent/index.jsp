<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>Hello world</h1>
<%
// 스크립트 릿 : 이부분은 JAVA문법을 사용 합니다. 
// Servlet의 service() 함수의 내부와 동일하다.
// JSP를 실행하면
// 1) Servlet JAVA 소스파일로 변환
// 2) JAVA 파일이 컴파일 되면 다시 클래스 파일로 된다.
// 3) Tomcat은 변환된 서블릿 클래스 파일을 실행 한다.
// 4) 클래스가 실행 된 결과가 HTML 문자열로 변환 되어 브라우저 화면에 노출 된다.

// 서블릿을 직접 만들어서 바로 실행 가능.
// 서블릿은 JAVA 소스 파일이기때문에 src 폴더에 작성한다.

out.println("<h1>Welcome to my homepage</h1>");
System.out.println("이 결과는 콘솔에 로그된다.");
%>
</body>
</html>
<%-- 이것은 JSP주석입니다. 소스에 노출 되지 않습니다. --%>
<!-- 
JSP - Java Server Page: HTML문서 구조에 JAVA 문법이 삽입 된다.
Servlet - HttpServlet을 상속 받은 JAVA클래스이다. JAVA 소스 안에 문자열로 HTML구현
 -->