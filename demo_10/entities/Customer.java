package com.example.demo.entities;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String first_name;
	@Column
	private String last_name;
	@Column
	private String email;
	@Column
	private String contact_no;
	@Column
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date birthdate;
	@Column
	private String identity;
	@Column
	private String married;
	@Column
	private String address;
	
	@OneToOne
	@JoinColumn(name="login_id")
	@Cascade(value = CascadeType.ALL)
	Login login_id;
	
	
	public Customer() {
		super();
		
	}

      

	public Customer(String first_name, String last_name, String email, String contact_no, Date birthdate,
			String identity, String married, String address, Login login_id) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_no = contact_no;
		this.birthdate = birthdate;
		this.identity = identity;
		this.married = married;
		this.address = address;
		this.login_id = login_id;
	}



	public Customer(int id, String first_name, String last_name, String email, String contact_no, Date birthdate,
			String identity, String married, String address, Login login_id) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_no = contact_no;
		this.birthdate = birthdate;
		this.identity = identity;
		this.married = married;
		this.address = address;
		this.login_id = login_id;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
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



	public Login getLogin() {
		return login_id;
	}



	public void setLogin(Login login_id) {
		this.login_id = login_id;
	}
	
	
	
	

}
