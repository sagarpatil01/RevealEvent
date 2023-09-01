package com.example.demo.entities;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "ticket_booking")
public class Ticket_booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private int quantity;
	@Column
	private float total_amount;
	@Column
	//@JsonFormat(pattern = "yyyy-mm-dd")
	private LocalDateTime booking_date;
	@Column
	private String payment_status;
	@Column
	private String payment_method;
	@ManyToOne
	@JoinColumn(name = "event_id")
	private Event event_id;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer_id;

	public Ticket_booking() {
		super();

	}

	public Ticket_booking(int id, int quantity, float total_amount, LocalDateTime booking_date, String payment_status,
			String payment_method, Event event_id, Customer customer_id) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.total_amount = total_amount;
		this.booking_date = booking_date;
		this.payment_status = payment_status;
		this.payment_method = payment_method;
		this.event_id = event_id;
		this.customer_id = customer_id;
	}

	public Ticket_booking(int quantity, float total_amount, LocalDateTime booking_date, String payment_status,
			String payment_method, Event event_id, Customer customer_id) {
		super();
		this.quantity = quantity;
		this.total_amount = total_amount;
		this.booking_date = booking_date;
		this.payment_status = payment_status;
		this.payment_method = payment_method;
		this.event_id = event_id;
		this.customer_id = customer_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public float getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(float total_amount) {
		this.total_amount = total_amount;
	}

	

	public LocalDateTime getBooking_date() {
		return booking_date;
	}

	public void setBooking_date(LocalDateTime booking_date) {
		this.booking_date = booking_date;
	}

	public String getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}

	public String getPayment_method() {
		return payment_method;
	}

	public void setPayment_method(String payment_method) {
		this.payment_method = payment_method;
	}

	public Event getEvent_id() {
		return event_id;
	}

	public void setEvent_id(Event event_id) {
		this.event_id = event_id;
	}

	public Customer getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(Customer customer_id) {
		this.customer_id = customer_id;
	}

}
