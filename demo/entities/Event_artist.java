package com.example.demo.entities;

import java.util.Set;

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
@Table(name="event_artist")
public class Event_artist {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@OneToOne
	@JoinColumn(name="event_id")
	private Event event_id;
	
	@ManyToOne
	@JoinColumn(name="artist_id")
	private Artist artist_id;
	
	private String reviews;
	
	public Event_artist() {
		super();
	}
	
	


	public Event_artist(int id, Event event_id, Artist artist_id, String reviews) {
		super();
		this.id = id;
		this.event_id = event_id;
		this.artist_id = artist_id;
		this.reviews = reviews;
	}




	public Event_artist(int id, Event event_id, Artist artist_id) {
		super();
		this.id = id;
		this.event_id = event_id;
		this.artist_id = artist_id;
	}


	public Event_artist(Event event_id, Artist artist_id) {
		super();
		this.event_id = event_id;
		this.artist_id = artist_id;
	}
	
	
}
