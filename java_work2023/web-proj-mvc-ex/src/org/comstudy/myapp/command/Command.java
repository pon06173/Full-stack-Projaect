package org.comstudy.myapp.command;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface Command {
   String process(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException;
}