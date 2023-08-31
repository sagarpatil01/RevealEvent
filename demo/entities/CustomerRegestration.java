package com.example.demo.entities;

import java.sql.Date;
import java.sql.Timestamp;

public class CustomerRegestration {
	

	public String username;
	public String password;
	public String first_name;
	public String last_name;
	public String email;
	public String contact_no;
	public Date birthdate;
	public String identity;
	public String married;
	public String address;
	
	
	
	public CustomerRegestration() {
		super();
		
	}



	public CustomerRegestration(String username, String password, String first_name, String last_name,
			String email, String contact_no, Date birthdate, String identity, String married, String address) {
		super();
		this.username = username;
		this.password = password;
		
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_no = contact_no;
		this.birthdate = birthdate;
		this.identity = identity;
		this.married = married;
		this.address = address;
		
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

    public String getFirst_name() {
		return first_name;
	}



	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}



	public String getLast_name() {
		return last_name;
	}

   public void setLast_name(String last_name) {
		this.last_name = last_name;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getContact_no() {
		return contact_no;
	}



	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}



	public Date getBirthdate() {
		return birthdate;
	}



	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}



	public String getIdentity() {
		return identity;
	}



	public void setIdentity(String identity) {
		this.identity = identity;
	}



	public String getMarried() {
		return married;
	}



	public void setMarried(String married) {
		this.married = married;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
	
}
