//package com.example.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.entities.Customer;
//import com.example.demo.entities.Event;
//import com.example.demo.entities.Ticket_booking;
//import com.example.demo.service.Ticket_bookingService;
//
//@CrossOrigin(origins="http://localhost:3000")
//@RestController
//public class Ticket_bookingController {
// 
//	@Autowired
//	Ticket_bookingService tbservice;
//	
//	@PostMapping("/insertticketbooking")
//	public Ticket_booking insert(@RequestBody Ticket_booking tb)
//	{
//		Event event_id=tb.getEvent_id();
//		Customer customer_id=tb.getCustomer_id();
//		Ticket_booking t=new Ticket_booking(tb.getQuantity(),tb.getTotal_amount(),tb.getBooking_date(),tb.getPayment_status(),tb.getPayment_method(),event_id,customer_id);
//		return tbservice.saveall(t);
//	}
//}
