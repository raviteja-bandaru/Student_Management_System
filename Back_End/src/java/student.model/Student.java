package com.student.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer htNo;
	private String name;
	private String course;
	private String addr;
	private String phNo;
	
	public Student() {
		super();
	}
	public Integer getHtNo() {
		return htNo;
	}
	public void setHtNo(Integer htNo) {
		this.htNo = htNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getPhNo() {
		return phNo;
	}
	public void setPhNo(String phNo) {
		this.phNo = phNo;
	}
	@Override
	public String toString() {
		return "Student [htNo=" + htNo + ", name=" + name + ", course=" + course + ", addr=" + addr + ", phNo=" + phNo
				+ "]";
	}
	
	
	
}
