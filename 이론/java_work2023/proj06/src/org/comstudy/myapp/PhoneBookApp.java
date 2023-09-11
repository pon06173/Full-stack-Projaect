package org.comstudy.myapp; 

 





 

import javax.servlet.RequestDispatcher; 

import javax.servlet.ServletException; 

import javax.servlet.annotation.WebServlet; 

import javax.servlet.http.HttpServlet; 

import javax.servlet.http.HttpServletRequest; 

import javax.servlet.http.HttpServletResponse; 

 

interface Command { 

   String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException; 

} 

 

class ListCommand implements Command { 

   public String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { 

      System.out.println("ListCommand 호출 ..."); 

      //list.jsp에서 phoneList를 사용 할 수 있도록 바인딩한다. 

      //바인딩 바뀐 페이지에서 사용 하도록 setAttribute() 하는 것 

      //forward(req,resp) 

      //req와 .jsp의 request는 같은 객체를 참조한다. 

      req.setAttribute("list", PhoneBookApp.phoneList);       

      return "list"; 

   } 

} 

 

class InputCommand implements Command { 

   public String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { 

      System.out.println("InputCommand 호출 ..."); 

      //POST라면 저장 후 Redirect 

      //아니라면 view 페이지로 Forward 

      if ("POST".equals(req.getMethod())) { 

      String name = req.getParameter("name"); 

      String phone = req.getParameter("phone"); 

      int no = PhoneBookApp.phoneSeq++; 

      PhoneBookApp.phoneList.add(new Phone(no,name,phone)); 

       

      System.out.println("저장완료"); 

      //resp.sendRedirect("list.phone"); 이걸 아래 리턴으로 옮김 

      return "redirect:list.phone"; 

      } 

      //"redirect:" 를 안 붙인 viewName은 forward이다. 

      return "input"; 

   } 

} 

 

class SearchCommand implements Command { 

   public String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { 

      System.out.println("SearchCommand 호출 ..."); 

       

      ArrayList<Phone> list = PhoneBookApp.phoneList;  //전체 리스트 호출 

      String name = req.getParameter("name"); // 입력한 이름 가져오기 

       

      if(name != null && !name.equals("")) { //입력한게 Null 아니고 공백도 아니면 ㄱ 

         // 새 목록 생성 

         System.out.println("검색된 결과가 있습니다."); 

         ArrayList<Phone> newList = new ArrayList<Phone>(); //잠시 쓸 버퍼 생성 

         //***for(A:B) => B에서 차례대로 객체를 다 꺼내서 A에 넣겠다. 

         for(Phone phone : PhoneBookApp.phoneList) { 

            if(phone.getName().indexOf(name) != -1) { //이름 중 name이 포함된다면 통과 

               newList.add(phone); //필터링된 리스트 

            } 

         } 

         list = newList; //를 보여줄 원래 리스트에 

         req.setAttribute("list", list); 

      }else {System.out.println("검색된 결과가 없습니다.");} 

       

      return "search"; 

   } 

} 

 

class ModifyCommand implements Command { 

   public String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { 

      System.out.println("ModifyCommand 호출 ..."); 

       

      req.setAttribute("no", req.getParameter("no")); //수정 전 보일 no 

      int no = Integer.parseInt(req.getParameter("no")); 

      int idx = PhoneBookApp.phoneList.indexOf(new Phone(no)); 

       

      if("POST".equals(req.getMethod())) { 

      //파라미터 no를 전달받아서 phoneList에서 indexOf 한다. 

      //수정할 값을 받아온다.. 

      //찾은 index의 요소를 수정한다. 

      //System.out.println("수정 POST 들어왔어요"); 

      String name = req.getParameter("name"); //넣은 값 들 

          String phone = req.getParameter("phone"); 

          if(idx != -1) { 

              PhoneBookApp.phoneList.get(idx).setName(name); //가져와서 set! 

              PhoneBookApp.phoneList.get(idx).setPhone(phone); 

              System.out.println("수정 완료"); 

          } 

          return "redirect:list.phone";  

      } 

      return "modify"; 

   } 

} 

 

class DeleteCommand implements Command { 

   public String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { 

      System.out.println("DeleteCommand 호출 ..."); 

       

      if ("POST".equals(req.getMethod())) { 

      //파라미터 no를 전달받아서 phoneList에서 indexOf 한다. 

      //찾은 index의 요소를 제거한다. 

       

      //System.out.println(req.getParameter("no")); 

      int no = Integer.parseInt(req.getParameter("no")); 

      int idx = PhoneBookApp.phoneList.indexOf(new Phone(no)); 

      if(idx != -1) { 

      PhoneBookApp.phoneList.remove(idx); 

      System.out.println("삭제 완료"); 

      } 

      return "redirect:list.phone"; 

      } 

      //req.setAttribute("no", req.getParameter("no")); 

      return "delete"; 

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

      int beginIndex = req.getContextPath().length(); 

      String endPoint = req.getRequestURI().substring(beginIndex); 

      System.out.println("endPoint => " + endPoint); 

      Command cmd = cmdMap.get(endPoint); 

      if(cmd == null) { 

         System.out.println(">>>>> 요청 한 path가 존재 하지 않습니다."); 

         cmd = cmdMap.get("/list.do"); 

      } 

      String viewName = cmd.process(req, resp); // list 

       

      // Dispatcher : forward, redirect 

      if( viewName.indexOf("redirect:") == 0 ) { 

      int startIdx = "redirect:".length();  

      resp.sendRedirect(viewName.substring(startIdx)); 

      } else { 

          // view 페이지로  forward 

          // String viewName = "/WEB-INF/views/list.jsp"; 

          viewName = "/WEB-INF/views/" + viewName + ".jsp"; 

          RequestDispatcher view = req.getRequestDispatcher(viewName); 

          view.forward(req, resp); 

       } 

   } // end of process 

 

   @Override 

   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { 

      process(req, resp); 

   } 

    

   @Override 

   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { 

      process(req, resp); 

   } 

    

} 