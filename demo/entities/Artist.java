package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="artist")
public class Artist {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	@Column
	private String first_name;
	@Column
	private String last_name;
	@Column
	private String email;
	@Column
	private String contact_no;
	@Column
	private String description;
	@Column
	private String social_media1;
	@Column
	private String social_media2;
	@Column
	private String social_media3;
	
	@OneToOne
	@JoinColumn(name="login_id")
	Login login_id;
	
	
	
	@ManyToOne
	@JoinColumn(name="genre_cat_id")
	Genre_category genre_cat_id;
	
//	@OneToMany(mappedBy="artist_id",cascade=CascadeType.ALL)
//	Set<Event_artist> eas;
	
	public Artist() {
		super();
	}
	
	
	
//	public Artist(int id, String first_name, String last_name, String email, String contact_no, String description,
//			String social_media1, String social_media2, String social_media3, Login login_id,
//			Genre_category genre_cat_id, Set<Event_artist> eas) {
//		super();
//		this.id = id;
//		this.first_name = first_name;
//		this.last_name = last_name;
//		this.email = email;
//		this.contact_no = contact_no;
//		this.description = description;
//		this.social_media1 = social_media1;
//		this.social_media2 = social_media2;
//		this.social_media3 = social_media3;
//		this.login_id = login_id;
//		this.genre_cat_id = genre_cat_id;
//		this.eas = eas;
//	}



	public Artist(int id, String first_name, String last_name, String email, String contact_no, String description,
			String social_media1, String social_media2, String social_media3, Login login_id,
			Genre_category genre_cat_id) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_no = contact_no;
		this.description = description;
		this.social_media1 = social_media1;
		this.social_media2 = social_media2;
		this.social_media3 = social_media3;
		this.login_id = login_id;
		this.genre_cat_id = genre_cat_id;
	}
	
	
	public Artist(String first_name, String last_name, String email, String contact_no, String description,
			String social_media1, String social_media2, String social_media3, Login login_id,
			Genre_category genre_cat_id) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.contact_no = contact_no;
		this.description = description;
		this.social_media1 = social_media1;
		this.social_media2 = social_media2;
		this.social_media3 = social_media3;
		this.login_id = login_id;
		this.genre_cat_id = genre_cat_id;
	}
	
	
	
	public Artist(int id) {
		super();
		this.id = id;
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
	public Login getLogin_id() {
		return login_id;
	}
	public void setLogin_id(Login login_id) {
		this.login_id = login_id;
	}
	
	public Genre_category getGenre_cat_id() {
		return genre_cat_id;
	}
	public void setGenre_cat_id(Genre_category genre_cat_id) {
		this.genre_cat_id = genre_cat_id;
	}


//
//	public Set<Event_artist> getEas() {
//		return eas;
//	}
//
//
//
//	public void setEas(Set<Event_artist> eas) {
//		this.eas = eas;
//	}
	
	
	

}
