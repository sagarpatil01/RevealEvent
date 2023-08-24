package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Event;
import com.example.demo.service.EventService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EventController {

	@Autowired
	EventService eservices;
	
	@GetMapping("/getevents")
	public List<Event> allevents()
	{
		return eservices.getall();
	}
}
