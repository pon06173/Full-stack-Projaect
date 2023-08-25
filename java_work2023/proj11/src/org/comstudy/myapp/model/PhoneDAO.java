package org.comstudy.myapp.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.comstudy.myapp.JdbcUtil;

public class PhoneDAO {
	private final String SELECT = "SELECT * FROM PHONE";
	private final String SELECT_ONE = "SELECT * FROM PHONE WHERE NO=?";
	private final String INSERT = "INSERT INTO PHONE(NAME, PHONE) VALUES (?, ?)";
	private final String UPDATE = "UPDATE PHONE SET NAME=?, PHONE=? WHERE NO=?";
	private final String DELETE = "DELETE FROM PHONE WHERE NO=?";

	private Connection conn;
	private PreparedStatement stmt;
	private ResultSet rs;

	// DAO : CRUD 기능을 모아 둔 곳
	// 전체 선택 (목록 출력)
	public List<Phone> selectAll() {
		conn = JdbcUtil.getConnection();
		List<Phone> phoneList = null;
		try {
			stmt = conn.prepareStatement(SELECT);
			rs = stmt.executeQuery();
			phoneList = new ArrayList<Phone>();
			while (rs.next()) {
				int no = rs.getInt("no");
				String name = rs.getString("name");
				String phone = rs.getString("phone");
				System.out.printf("%d, %s, %s\n", no, name, phone);
				phoneList.add(new Phone(no, name, phone));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
		return phoneList;
	}

	// 검색 (하나만 검색 - 상세보기, 수정)
	public Phone selectOne(Phone dto) {
		conn = JdbcUtil.getConnection();
		Phone phone = null;
		try {
			stmt = conn.prepareStatement(SELECT_ONE);
			stmt.setInt(1, dto.getNo());
			rs = stmt.executeQuery();
			if (rs.next()) {
				int no = rs.getInt("no");
				String name = rs.getString("name");
				String phoneNum = rs.getString("phone");
				System.out.printf("%d, %s, %s\n", no, name, phoneNum);
				phone = new Phone(no, name, phoneNum);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
		return phone;
	}

	// 입력
	public void insert(Phone dto) {
		// connection 받아오기
		// statement 준비
		// 변수 셋팅
		// 실행
		// close
		conn = JdbcUtil.getConnection();
		try {
			stmt = conn.prepareStatement(INSERT);
			stmt.setString(1, dto.getName());
			stmt.setString(2, dto.getPhone());
			int cnt = stmt.executeUpdate();
			if(cnt > 0) {
				System.out.println("결과: 입력 성공!");
				conn.commit();
			} else {
				System.out.println("결과: 입력 실패!");
				conn.rollback();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JdbcUtil.close(conn, stmt, rs);
		}
	}

	// 수정
	public void update(Phone dto) {

	}

	// 삭제
	public void delete(Phone dto) {

	}
}