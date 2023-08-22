package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name="login")
public class Login {
	 
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
     public int id;
	 @Column
     public String username;
	 @Column
     public String password;
	
	 @ManyToOne
	 @JoinColumn(name="user_type_id")
	 User_type user_type_id;
	 
	/* @OneToOne(mappedBy ="login_id")
	 @Cascade(value = CascadeType.ALL)
	 Customer c; */
	 
	public Login() {
		super();
		
	}

	

	public Login(int id, String username, String password, User_type user_type_id) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.user_type_id = user_type_id;
	}

    

	public Login(String username, String password, User_type user_type_id) {
		super();
		this.username = username;
		this.password = password;
		this.user_type_id = user_type_id;
	}



	public Login(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	public User_type getUtype() {
		return user_type_id;
	}



	public void setUtype(User_type user_type_id) {
		this.user_type_id = user_type_id;
	}

	
	
	
	 
	 
}
