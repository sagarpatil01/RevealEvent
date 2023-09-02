package com.example.demo.entities;

import java.sql.Date;
import java.time.LocalDateTime;

public class Ticket_bookingInsert {

	int quantity;
	float total_amount;
	LocalDateTime booking_date=LocalDateTime.now();
	String payment_method;
	String payment_status;
	int eid;
	int cid;
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
	public String getPayment_method() {
		return payment_method;
	}
	public void setPayment_method(String payment_method) {
		this.payment_method = payment_method;
	}
	public String getPayment_status() {
		return payment_status;
	}
	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	
	
}
