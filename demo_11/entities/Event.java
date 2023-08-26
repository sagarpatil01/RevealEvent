package com.example.demo.entities;

import java.sql.Blob;
import java.sql.Date;
import java.util.regex.Pattern;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="event")
public class Event {
   
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String event_name;
	@Column
	private String description;
	@Column
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date event_date;
	@Column
	private String duration;
	@Column
	private float price;
	
	@Column
	private String starttime;
	
	@Column
	private byte[] img_landscape;
	
	@OneToOne
	@JoinColumn(name="genre_cat_id")
	private Genre_category genre_cat_id;
	
	@OneToOne
	@JoinColumn(name="venue_id")
	private Venue venue_id;
	
	@OneToOne
	@JoinColumn(name="organiser_id")
	private Organizer organiser_id;
	
	

	
	
	
	

	

    


	



	/*public Event(String event_name, String description, Date event_date, String duration, float price, Blob eventimg,
			Genre_category genre_cat_id, Venue venue_id, Organizer organiser_id) {
		super();
		this.event_name = event_name;
		this.description = description;
		this.event_date = event_date;
		this.duration = duration;
		this.price = price;
		this.eventimg = eventimg;
		this.genre_cat_id = genre_cat_id;
		this.venue_id = venue_id;
		this.organiser_id = organiser_id;
	}*/
   
	public Event() {
		super();
	}
	
	

	public Event(int id, String event_name, String description, Date event_date, String duration, float price,
			String starttime, Genre_category genre_cat_id, Venue venue_id, Organizer organiser_id) {
		super();
		this.id = id;
		this.event_name = event_name;
		this.description = description;
		this.event_date = event_date;
		this.duration = duration;
		this.price = price;
		this.starttime = starttime;
		this.genre_cat_id = genre_cat_id;
		this.venue_id = venue_id;
		this.organiser_id = organiser_id;
	}

   

	public Event(String event_name, String description, Date event_date, String duration, float price, String starttime,
			Genre_category genre_cat_id, Venue venue_id, Organizer organiser_id) {
		super();
		this.event_name = event_name;
		this.description = description;
		this.event_date = event_date;
		this.duration = duration;
		this.price = price;
		this.starttime = starttime;
		this.genre_cat_id = genre_cat_id;
		this.venue_id = venue_id;
		this.organiser_id = organiser_id;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEvent_name() {
		return event_name;
	}

	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getEvent_date() {
		return event_date;
	}

	public void setEvent_date(Date event_date) {
		this.event_date = event_date;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Genre_category getGenre_cat_id() {
		return genre_cat_id;
	}

	public void setGenre_cat_id(Genre_category genre_cat_id) {
		this.genre_cat_id = genre_cat_id;
	}

	public Venue getVenue_id() {
		return venue_id;
	}

	public void setVenue_id(Venue venue_id) {
		this.venue_id = venue_id;
	}

	public Organizer getOrganiser_id() {
		return organiser_id;
	}

	public void setOrganiser_id(Organizer organiser_id) {
		this.organiser_id = organiser_id;
	}

	/*public Blob getEventimg() {
		return eventimg;
	}

	public void setEventimg(Blob eventimg) {
		this.eventimg = eventimg;
	}*/

	public String getStarttime() {
		return starttime;
	}



	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}



	public byte[] getImg_landscape() {
		return img_landscape;
	}



	public void setImg_landscape(byte[] img_landscape) {
		this.img_landscape = img_landscape;
	}


	
	
}
