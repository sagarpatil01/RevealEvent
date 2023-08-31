package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="organizer")
public class Organizer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String company_name;
    @Column
    private String licence_no;
    @Column
    private String email;
    @Column
    private String contact_no;
    
    @OneToOne
    @JoinColumn(name="login_id")
    Login login_id;

	public Organizer() {
		super();
		
	}

	public Organizer(int id, String company_name, String licence_no, String email, String contact_no, Login login_id) {
		super();
		this.id = id;
		this.company_name = company_name;
		this.licence_no = licence_no;
		this.email = email;
		this.contact_no = contact_no;
		this.login_id = login_id;
	}

	public Organizer(String company_name, String licence_no, String email, String contact_no, Login login_id) {
		super();
		this.company_name = company_name;
		this.licence_no = licence_no;
		this.email = email;
		this.contact_no = contact_no;
		this.login_id = login_id;
	}
	
	

	public Organizer(int id) {
		super();
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getLicence_no() {
		return licence_no;
	}

	public void setLicence_no(String licence_no) {
		this.licence_no = licence_no;
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

	public Login getLogin_id() {
		return login_id;
	}

	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
    
    
	
}
