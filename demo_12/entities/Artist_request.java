package com.example.demo.entities;

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
@Table(name="")
public class Artist_request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
 	private int id;
    @OneToOne
    @JoinColumn(name="org_id")
	private Organizer org_id;
    
    @ManyToOne
    @JoinColumn(name="art_id")
	private Artist art_id;
    @Column
	private boolean status;
    
    
    
    
	public Artist_request() {
		super();
		
	}
	
	


	public Artist_request(int id, boolean status) {
		super();
		this.id = id;
		this.status = status;
	}




	public Artist_request(int id, Organizer org_id, Artist art_id, boolean status) {
		super();
		this.id = id;
		this.org_id = org_id;
		this.art_id = art_id;
		this.status = status;
	}


	public Artist_request(Organizer org_id, Artist art_id, boolean status) {
		super();
		this.org_id = org_id;
		this.art_id = art_id;
		this.status = status;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public Organizer getOrg_id() {
		return org_id;
	}


	public void setOrg_id(Organizer org_id) {
		this.org_id = org_id;
	}


	public Artist getArt_id() {
		return art_id;
	}


	public void setArt_id(Artist art_id) {
		this.art_id = art_id;
	}


	public boolean isStatus() {
		return status;
	}


	public void setStatus(boolean status) {
		this.status = status;
	}
    
	
    
	
}
