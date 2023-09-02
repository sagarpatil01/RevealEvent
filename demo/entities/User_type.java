package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="user_type")
public class User_type {
	
	@Id
	private int id;
	@Column
	private String user_type;
		
	public User_type(int id, String user_type) {
		super();
		this.id = id;
		this.user_type = user_type;
	}

	public User_type(String user_type) {
		super();
		this.user_type = user_type;
	}

	public User_type() {
		super();
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}
	
	

}
