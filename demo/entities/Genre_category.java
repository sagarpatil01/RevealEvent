package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="genre_category")
public class Genre_category {
	@Id
	@Column(name="id")
	private int id;
	@Column
	private String category_name;
	
	
	public Genre_category() {
		super();
	}
	
	public Genre_category(int id, String category_name) {
		super();
		this.id = id;
		this.category_name = category_name;
	}
	
	
	
	public Genre_category(String category_name) {
		super();
		this.category_name = category_name;
	}
 
	 
	
	public Genre_category(int id) {
		super();
		this.id = id;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCategory_name() {
		return category_name;
	}
	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	
	
	
	

}
