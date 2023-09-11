package org.comstudy.myapp;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

interface Command {
   void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException;
}

class ListCommand implements Command {
   public void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      ArrayList<Phone> list = PhoneBookApp.phoneList;
      String name = req.getParameter("name");
      if(name != null && !name.equals("")) {
         // 새 목록 생성
         System.out.println("name이 있다!");
         ArrayList<Phone> newList = new ArrayList<Phone>();
         for(Phone phone : PhoneBookApp.phoneList) {
            if(phone.getName().indexOf(name) != -1) {
               newList.add(phone);
            }
         }
         list = newList;
      }
      
      PrintWriter out = resp.getWriter();
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"UTF-8\">\r\n");
      out.write("<title>index.jsp</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<h2>전화 번호 목록</h2>\r\n");   
      out.write("<table width=100% border=1 >\r\n");
      for(Phone phone : list) {
         out.write(phone.toRow());
      }
      out.write("</table>\r\n");
      out.write("<a href=search.phone>검색</a> | ");
      out.write("<a href=input.phone>등록</a> | ");
      out.write("<a href=list.phone>목록</a>");
      out.write("</body>\r\n");
      out.write("</html>");
      out.close();
   }
}

class InputCommand implements Command {
   public void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      if("POST".equals( req.getMethod()) ) {
         // 저장 후 리스트로 이동
         String name = req.getParameter("name");
         String phone = req.getParameter("phone");
         PhoneBookApp.phoneList.add(new Phone(PhoneBookApp.phoneSeq++, name, phone));
         resp.sendRedirect("list.phone");
         return;
      }
      // GET 방식일때 입력 창 보여준다.
      PrintWriter out = resp.getWriter();
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"UTF-8\">\r\n");
      out.write("<title>index.jsp</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<h2>전화 번호 입력</h2>\r\n");
      out.write("<form action=\"input.phone\" method=\"POST\">\r\n" + 
            "<table>\r\n" + 
            "<tr>\r\n" + 
            "<th>성명</th>\r\n" + 
            "<td><input type=\"text\" name=\"name\" value=\"김범준\"></td>\r\n" + 
            "</tr>\r\n" + 
            "<tr>\r\n" + 
            "<th>성명</th>\r\n" + 
            "<td><input type=\"text\" name=\"phone\" value=\"010-1234-5678\"></td>\r\n" + 
            "</tr>\r\n" + 
            "<tr>\r\n" + 
            "<td colspan=\"2\"><input type=\"submit\" value=\"저장\"></td>\r\n" + 
            "</tr>\r\n" + 
            "</table>\r\n" + 
            "</form>");
      out.write("</body>\r\n");
      out.write("</html>");
      out.close();
   }
}

class SearchCommand implements Command {
   public void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      PrintWriter out = resp.getWriter();
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"UTF-8\">\r\n");
      out.write("<title>index.jsp</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<h2>전화 번호 검색</h2>\r\n");
      out.write("<form action=\"list.phone\">\r\n" + 
            "<input type=\"text\" name=\"name\">\r\n" + 
            "<input type=\"submit\" value=\"검색\">\r\n" + 
            "</form>");
      out.write("</body>\r\n");
      out.write("</html>");
      out.close();
   }
}

class ModifyCommand implements Command {
   public void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      ArrayList<Phone> list = PhoneBookApp.phoneList;
      int no = Integer.parseInt(req.getParameter("no"));
      int idx = list.indexOf(new Phone(no));
      if("POST".equals(req.getMethod())) {
         //  수정 처리 후 리스트로 이동
         String name = req.getParameter("name");
         String phone = req.getParameter("phone");
         PhoneBookApp.phoneList.get(idx).setName(name); 
         PhoneBookApp.phoneList.get(idx).setPhone(phone); 
         resp.sendRedirect("list.phone");
      }
      Phone phone = list.get(idx);
      PrintWriter out = resp.getWriter();
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"UTF-8\">\r\n");
      out.write("<title>index.jsp</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<h2>전화 번호 수정</h2>\r\n");
      out.write(String.format("<form action=\"modify.phone\" method=\"POST\">\r\n" + 
            "<table>\r\n" + 
            "<tr>\r\n" + 
            "<th>NO</th>\r\n" + 
            "<td><input type=\"hidden\" name=\"no\" value=\"%d\">%d</td>\r\n" + 
            "</tr>\r\n" + 
            "<tr>\r\n" + 
            "<th>성명</th>\r\n" + 
            "<td><input type=\"text\" name=\"name\" value=\"%s\"></td>\r\n" + 
            "</tr>\r\n" + 
            "<tr>\r\n" + 
            "<th>성명</th>\r\n" + 
            "<td><input type=\"text\" name=\"phone\" value=\"%s\"></td>\r\n" + 
            "</tr>\r\n" + 
            "<tr>\r\n" + 
            "<td colspan=\"2\"><input type=\"submit\" value=\"저장\"></td>\r\n" + 
            "</tr>\r\n" + 
            "</table>\r\n" + 
            "</form>", 
            phone.getNo(), 
            phone.getNo(), 
            phone.getName(), 
            phone.getPhone()));
      out.write("</body>\r\n");
      out.write("</html>");
      out.close();
   }
}

class DeleteCommand implements Command {
   public void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      // 즉시 삭제 후 list 페이지로 이동
      ArrayList<Phone> list = PhoneBookApp.phoneList;
      int no = Integer.parseInt(req.getParameter("no"));
      int idx = list.indexOf(new Phone(no));
      if(idx != -1) {
         list.remove(idx);
         System.out.println("삭제 완료!");
      }
      resp.sendRedirect("list.phone");
   }
}

// 매핑 - 브라우저 주소창의 URI와 실행 할 클랙스를 연결 
@WebServlet("*.phone")
public class PhoneBookApp extends HttpServlet {
   public static ArrayList<Phone> phoneList = new ArrayList<Phone>();
   static int phoneSeq = 1;
   static {
      phoneList.add(new Phone(phoneSeq++, "홍길동", "010-1111-1111"));
      phoneList.add(new Phone(phoneSeq++, "김길동", "010-1111-2222"));
      phoneList.add(new Phone(phoneSeq++, "박길동", "010-1111-3333"));
   }
   
   static HashMap<String, Command> cmdMap = new HashMap<String, Command>();
   static {
      cmdMap.put("/list.phone", new ListCommand());
      cmdMap.put("/input.phone", new InputCommand());
      cmdMap.put("/search.phone", new SearchCommand());
      cmdMap.put("/modify.phone", new ModifyCommand());
      cmdMap.put("/delete.phone", new DeleteCommand());
   }
   
   protected void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      resp.setCharacterEncoding("UTF-8");
      req.setCharacterEncoding("UTF-8");
      //System.out.println(req.getMethod() + " - PhoneBookApp 요청");
      //System.out.println("ContextPath: " + req.getContextPath());
      //System.out.println("RequestURI: " + req.getRequestURI());
      int beginIndex = req.getContextPath().length();
      String endPoint = req.getRequestURI().substring(beginIndex);
      System.out.println("endPoint => " + endPoint);
      Command cmd = cmdMap.get(endPoint);
      if(cmd == null) {
         System.out.println(">>>>> 요청 한 path가 존재 하지 않습니다.");
         cmd = cmdMap.get("/list.phone");
      }
      cmd.process(req, resp);
   }

   @Override
   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      process(req, resp);
   }
   
   @Override
   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      process(req, resp);
   }
   
}