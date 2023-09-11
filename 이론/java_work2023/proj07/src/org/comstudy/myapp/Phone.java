package org.comstudy.myapp;

public class Phone {
	private int no;
	private String name;
	private String phone;
	
	public Phone() {
		this(0, "", "");
	}
	public Phone(String name) {
		this.name = name;
	}
	public Phone(int no) {
		this.no = no;
	}
	public Phone(int no, String name, String phone) {
		this.no = no;
		this.name = name;
		this.phone = phone;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		return "Phone [no=" + no + ", name=" + name + ", phone=" + phone + "]";
	}
	
	public String toRow() {
		return String.format("<tr>"
				+ "<td>%d</td>"
				+ "<td>%s</td>"
				+ "<td>%s</td>"
				+ "<td><a href=\"modify.phone?no=%d\">수정</a></td>"
				+ "<td><a href=\"delete.phone?no=%d\">삭제</a></td>"
				+ "</tr>", no, name, phone, no, no);
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + no;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Phone other = (Phone) obj;
		if (no != other.no)
			return false;
		return true;
	}
}
