package org.comstudy.myapp.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HomeCommand implements Command {
   public String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      return "home";
   }
}