package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Location;
import com.example.demo.service.LocationService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LocationController {

	@Autowired
	LocationService lservice;
	
	@GetMapping("/getlocation")
	public List<Location> alllocation()
	{
		return lservice.getall();
	}
}
