package org.comstudy.myapp.member;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/login.do")
public class LoginServlet extends HttpServlet {

   protected void doGet(HttpServletRequest request, HttpServletResponse response)
         throws ServletException, IOException {
      // <a> 태그 링크로 요청 했을때 doGet() 실행
      System.out.println("GET - doGet 요청 됨...");
      // Session의 정보를 모두 비우고 login.jsp 페이지로 돌아 가기
      HttpSession session = request.getSession();
      session.removeAttribute("username"); // 해당 속성만 제거
      session.invalidate(); // 세션의 모든 정보 초기화
      
      response.sendRedirect("login.jsp");
   }

   protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      // form 태그에서 POST 방식으로 요청 goPost() 실행
      System.out.println("POST - doPost 요청 됨...");
      
      String username = request.getParameter("username");
      String password = request.getParameter("password");

      if ("1".equals(username) && "2".equals(password)) {
         // 로그인 성공
         HttpSession session = request.getSession();
         session.setAttribute("username", username);

         response.sendRedirect("welcome.jsp");
      } else {
         // 로그인 실패
         response.sendRedirect("login.jsp");
      }
   }
}