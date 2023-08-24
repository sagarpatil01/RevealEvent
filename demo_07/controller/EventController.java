package com.example.demo.controller;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entities.Event;
import com.example.demo.entities.EventReg;
import com.example.demo.entities.Genre_category;
import com.example.demo.entities.Organizer;
import com.example.demo.entities.Venue;
import com.example.demo.service.EventService;
import com.example.demo.service.Genre_categoryService;
import com.example.demo.service.OrganizerService;
import com.example.demo.service.VenueService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EventController {

	@Autowired
	EventService eservices;
	
	@Autowired
	Genre_categoryService genrservice;
	
	@Autowired
	VenueService vservice;
	
	@Autowired
	OrganizerService oservice;
	
	@GetMapping("/getevents")
	public List<Event> allevents()
	{
	 
	  return eservices.getall();
	}
	
	@PostMapping("/insertevent")
	public Event insert(@RequestBody EventReg er)
	{
		int gn=er.getGencatid();
		Genre_category gc=genrservice.getbyid(gn);
		int vn=er.getVid();
		Venue v=vservice.getbyid(vn);
		int on=er.getOid();
		Organizer o=oservice.getbyid(on);
		Event e=new Event(er.getEvent_name(),er.getDescription(),er.getEvent_date(),er.getDuration(),er.getPrice(),er.getStarttime(),gc,v,o);
		return eservices.saveevent(e);
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
