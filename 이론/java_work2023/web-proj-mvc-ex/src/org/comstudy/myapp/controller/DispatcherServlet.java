package org.comstudy.myapp.controller;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.comstudy.myapp.command.Command;
import org.comstudy.myapp.command.HelloCommand;
import org.comstudy.myapp.command.HomeCommand;

public class DispatcherServlet extends HttpServlet {
   
   public static HashMap<String, Command> cmdMap = new HashMap<String, Command>();
   
   @Override
   public void init() throws ServletException {
      try {
         Class<?> clsHello = Class.forName("org.comstudy.myapp.command.HelloCommand");
         Class<?> clsHome = Class.forName("org.comstudy.myapp.command.HomeCommand");
         
         Command helloCmdObj = (Command) clsHello.newInstance();
         Command homeCmdObj = (Command) clsHome.newInstance();
         
         cmdMap.put("/hello.do", helloCmdObj);
         cmdMap.put("/home.do", homeCmdObj);
      } catch (ClassNotFoundException | InstantiationException | IllegalAccessException e) {
         e.printStackTrace();
      }
   }

   protected void process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      resp.setCharacterEncoding("UTF-8");
      req.setCharacterEncoding("UTF-8");
      resp.setContentType("text/html; charset=UTF-8");
      //System.out.println("DispatcherServlet - " + req.getMethod());
      
      int beginIndex = req.getContextPath().length();
      String endPoint = req.getRequestURI().substring(beginIndex);
      //System.out.println("end point : " + endPoint);
      
//      String viewName = new HomeCommand().process(req, resp);
//      if("/hello.do".equals(endPoint)) {
//         viewName = new HelloCommand().process(req, resp);
//      }
      
      String viewName = cmdMap.get(endPoint).process(req, resp);
      
      String prefix = "/WEB-INF/views/";
      String suffix = ".jsp";
      String path = prefix + viewName + suffix;
      //System.out.println("path : " + path);
      RequestDispatcher view = req.getRequestDispatcher(path);
      view.forward(req, resp);
   }

   protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      process(req, resp);
   }

   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      process(req, resp);
   }
}