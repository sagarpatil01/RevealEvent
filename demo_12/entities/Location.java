package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="location")
public class Location {
	@Id
	private int id;
	@Column
	private String city_name;
	@Column
	private String area_name;
	
	public Location() {
		super();
	}

	public Location(int id, String city_name, String area_name) {
		super();
		this.id = id;
		this.city_name = city_name;
		this.area_name = area_name;
	}

	public Location(String city_name, String area_name) {
		super();
		this.city_name = city_name;
		this.area_name = area_name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCity_name() {
		return city_name;
	}

	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}

	public String getArea_name() {
		return area_name;
	}

	public void setArea_name(String area_name) {
		this.area_name = area_name;
	}
	
	

}
