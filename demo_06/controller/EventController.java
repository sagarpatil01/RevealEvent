package com.example.demo.controller;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping("/geteventname")
	public Event bygenid(@RequestParam("genre_cat_id") int l)
	{
		return eservices.getevent(l);
	}
	
	/* List<Event> events=eservices.getall();
	  events.forEach(event ->{
		  if(event.getEventimg()!=null) {
			  String base64Image=Base64.getEncoder().encodeToString(event.getEventimg());
			  event.setBase64Image(base64Image);
		  }
	  });*/
}
