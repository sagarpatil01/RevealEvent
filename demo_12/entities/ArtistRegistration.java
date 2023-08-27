package com.example.demo.entities;

public class ArtistRegistration {
	String username;
	String password;
	String first_name;
	String last_name;
	String email;
	String contact_no;
	String description;
	String social_media1;
	String social_media2;
	String social_media3;
	int genid;
	
	public ArtistRegistration() {
		super();
	}
	
	

	public ArtistRegistration(String username, String password, String first_name, String last_name, String email,
			String contact_no, String description, String social_media1, String social_media2, String social_media3,
			int genid) {
		super();
		this.username = username;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_no = contact_no;
		this.description = description;
		this.social_media1 = social_media1;
		this.social_media2 = social_media2;
		this.social_media3 = social_media3;
		this.genid = genid;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSocial_media1() {
		return social_media1;
	}
	public void setSocial_media1(String social_media1) {
		this.social_media1 = social_media1;
	}
	public String getSocial_media2() {
		return social_media2;
	}
	public void setSocial_media2(String social_media2) {
		this.social_media2 = social_media2;
	}
	public String getSocial_media3() {
		return social_media3;
	}
	public void setSocial_media3(String social_media3) {
		this.social_media3 = social_media3;
	}

	public int getGenid() {
		return genid;
	}

	public void setGenid(int genid) {
		this.genid = genid;
	}

	
	
	
	

}
