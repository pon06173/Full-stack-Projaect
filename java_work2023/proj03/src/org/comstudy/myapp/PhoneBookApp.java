package org.comstudy.myapp;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

interface Command {
	void procerss(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException;
}

class Input implements Command {
	@Override
	public void procerss(HttpServletRequest req, HttpServletResponse resp)  throws ServletException, IOException {
		if("POST".equals( req.getMethod() ) ) {
			String name = req.getParameter("name");
			String phone = req.getParameter("phone");
			PhoneBookApp.phoneList.add(new Phone(PhoneBookApp.noSequence++, name, phone));
			resp.sendRedirect("output.do"); //  doGet() 으로 이동
			return;
		}
		
		PrintWriter out = resp.getWriter();
		out.write("<form action='input.do' method='post'>");
		out.write("<p>성명: <input type='text' name='name' value='testUser' /></p>");
		out.write("<p>전화: <input type='text' name='phone' value='010-9999-9999' /></p>");
		out.write("<p><input type=submit value=전송 /></p>");
		out.write("</form>");
		out.close();
	}
}

class Output implements Command {
	@Override
	public void procerss(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		out.write("<h1>Output</h1>");
		ArrayList<Phone> list = PhoneBookApp.phoneList;
		out.println("<table border=1 width=100%>");
		for(Phone phone : list) {
			out.println(phone.toRow());
		}
		out.println("</table>");
		out.println("<a href='input.do'>입력</a>");
		out.close();
	}
}

class Modify implements Command {
	@Override
	public void procerss(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		out.write("<h1>Modify</h1>");
		out.close();
	}
}

class Search implements Command {
	@Override
	public void procerss(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		out.write("<h1>Search</h1>");
		out.close();
	}
}

class Delete implements Command {
	@Override
	public void procerss(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		out.write("<h1>Delete</h1>");
		out.close();
	}
}

// URI와 클래스를 매핑을 해야 브라우저에서 실행 가능하다.
@WebServlet("*.do")
public class PhoneBookApp extends HttpServlet {
	public static Scanner scan = new Scanner(System.in);
	public static final ArrayList<Phone> phoneList = new ArrayList<Phone>();
	public static int noSequence = 1;
	static {
		phoneList.add(new Phone(noSequence++, "홍길동", "010-1111-1111"));
		phoneList.add(new Phone(noSequence++, "김길동", "010-2222-2222"));
		phoneList.add(new Phone(noSequence++, "박길동", "010-3333-3333"));
	}
	public static final HashMap<String, Command> commandMap = new HashMap<String, Command>();
	static {
		// static 초기화 블럭 - static 멤버를 초기화 한다.
		commandMap.put("/input.do", new Input());
		commandMap.put("/output.do", new Output());
		commandMap.put("/search.do", new Search());
		commandMap.put("/modify.do", new Modify());
		commandMap.put("/delete.do", new Delete());
	}
	public static Command command = null;

	protected void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset=UTF-8");
		req.setCharacterEncoding("UTF-8");
		
		//System.out.println(">>>>> doGet() - HelloServlet 호출 ...");
		//System.out.println("RequestURI: " + req.getRequestURI());
		//System.out.println("ContextPath: " + req.getContextPath());
		int beginIndex = req.getContextPath().length();
		String endPoint = req.getRequestURI().substring(beginIndex);
		//System.out.println("EndPoint: " + endPoint);
		
		//PrintWriter out = resp.getWriter();
		//out.write("<h1>Hello Servlet</h1>");
		//out.close();
		
		command = commandMap.get(endPoint);
		if(command != null) {
			command.procerss(req, resp);
		} else {
			commandMap.get("/output.do").procerss(req, resp);
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		process(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		String name = req.getParameter("name");
//		String phone = req.getParameter("phone");
//		phoneList.add(new Phone(noSequence++, name, phone));
//		resp.sendRedirect("output.do"); //  doGet() 으로 이동
		
		process(req, resp);
	}
}
