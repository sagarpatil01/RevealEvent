package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="venue")
public class Venue {

	@Id
	private int id;
	@Column
	private String venue_name;
	@Column
	private String capacity;
	@Column
	private String description;
	@ManyToOne
	@JoinColumn(name = "location_id")
	Location location_id;
	
	public Venue() {
		super();
	}

	public Venue(int id, String venue_name, String capacity, String description, Location location_id) {
		super();
		this.id = id;
		this.venue_name = venue_name;
		this.capacity = capacity;
		this.description = description;
		this.location_id = location_id;
	}

	public Venue(String venue_name, String capacity, String description, Location location_id) {
		super();
		this.venue_name = venue_name;
		this.capacity = capacity;
		this.description = description;
		this.location_id = location_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVenue_name() {
		return venue_name;
	}

	public void setVenue_name(String venue_name) {
		this.venue_name = venue_name;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Location getLocation_id() {
		return location_id;
	}

	public void setLocation_id(Location location_id) {
		this.location_id = location_id;
	}
	
	
	
}
