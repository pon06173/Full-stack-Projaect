import java.sql.*;

public class DBTest {
    public static void main(String[] args) {
        // MySQL 데이터베이스 연결 정보
        String url = "jdbc:mysql://localhost:3306/test_db";
        String username = "root";
        String password = "tjdudals2010";

        // JDBC 드라이버 로드
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        // 데이터베이스 연결
        try (Connection conn = DriverManager.getConnection(url, username, password)) {
            // 쿼리 실행
            String query = "SELECT * FROM user";
            try (Statement stmt = conn.createStatement()) {
                ResultSet rs = stmt.executeQuery(query);

                // 결과 처리
                while (rs.next()) {
                    String id = rs.getString("id");
                    String pw = rs.getString("password");

                    System.out.println("ID: " + id + ", Password: " + pw );
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}