package org.comstudy.myapp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcUtil {
   static String url = "jdbc:h2:tcp://localhost/~/test";
   static String user = "sa";
   static String password = "";
   public static Connection getConnection() {
      try {
         Class.forName("org.h2.Driver");
         return DriverManager.getConnection(url, user, password);
      } catch (ClassNotFoundException | SQLException e) {
         e.printStackTrace();
      }
      return null;
   }
   
   public static void close(Connection obj) throws SQLException {
      if(obj != null) obj.close();
   }
   public static void close(Statement obj) throws SQLException {
      if(obj != null) obj.close();
   }
   public static void close(ResultSet obj) throws SQLException {
      if(obj != null) obj.close();
   }
   
   public static void close(Connection conn, Statement stmt, ResultSet rs) {
      try {
         close(conn);
         close(stmt);
         close(rs);
      } catch (SQLException e) {
         e.printStackTrace();
      }
   }
}