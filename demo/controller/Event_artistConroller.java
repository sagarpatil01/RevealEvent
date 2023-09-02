package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Event_artist;
import com.example.demo.service.Event_artistService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Event_artistConroller {

	@Autowired
	Event_artistService easervice;
	
	@GetMapping("/geteventartist")
	public List<Event_artist> all()
	{
		return easervice.getall();
	}
	
	/*public Optional<Event_artist> geteventsde(@Param("eid") int eid,@Param("aid") int aid)
	{
		return easervice.getLogin(eid, aid);
	}*/
}
