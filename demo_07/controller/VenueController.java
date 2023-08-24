package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Venue;
import com.example.demo.service.VenueService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VenueController {

	@Autowired
	VenueService veservice;
	
	@GetMapping("/getvenue")
	public List<Venue> allvenues()
	{
		return veservice.getall();
	}
}
