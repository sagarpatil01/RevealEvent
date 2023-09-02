package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Ticket_booking;
import com.example.demo.repository.Ticket_bookingRepo;
@Service
public class Ticket_bookingService {

	@Autowired
	Ticket_bookingRepo trrepo;
	
	public Ticket_booking saveall(Ticket_booking tr)
	{
		return trrepo.save(tr);
	}
	
	public List<Ticket_booking> getuser(int uid)
	{
		return trrepo.getbyuid(uid);
	}
}
