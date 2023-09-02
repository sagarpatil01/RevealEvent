package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Event;
import com.example.demo.entities.Ticket_booking;
import com.example.demo.entities.Ticket_bookingInsert;
import com.example.demo.service.CustomerService;
import com.example.demo.service.EventService;
import com.example.demo.service.Ticket_bookingService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Ticket_bookingController {
 
	@Autowired
	Ticket_bookingService tbservice;
	
	@Autowired
	EventService eveservice;
	
	@Autowired
	CustomerService custservice;
	@PostMapping("/insertticketbooking")
	public Ticket_booking insert(@RequestBody Ticket_bookingInsert tbi)
	{
		int e=tbi.getEid();
		Event event_id=eveservice.eventid(e);
		int c=tbi.getCid();
		Customer customer_id=custservice.custid(c);
		Ticket_booking t=new Ticket_booking(tbi.getQuantity(),tbi.getTotal_amount(),tbi.getBooking_date(),tbi.getPayment_status(),tbi.getPayment_method(),event_id,customer_id);
		return tbservice.saveall(t);
	}
	
	@GetMapping("/getuser")
	public List<Ticket_booking> getuserde(@Param("uid") int uid)
	{
		return tbservice.getuser(uid);
	}
}
