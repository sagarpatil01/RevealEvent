package com.example.demo.controller;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	@PostMapping(value="/insertimage/{id}",consumes="multipart/form-data")
	public boolean uploadImage(@PathVariable("id") int id,@RequestBody MultipartFile file)
    {
		System.out.println(id);
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getSize());
    	boolean flag=true;
    	try
    	{
    		flag= eservices.upload(id, file.getBytes());
    	}
    	catch(Exception e)
    	{
    		flag=false;
    	}
    	return flag;
    }
	
	@GetMapping("/geteventname")
	public List<Event> bygenid(@RequestParam("genre_cat_id") int l)
	{
		return eservices.allfor(l);
	}
	
	@GetMapping(value="/oneevent/{id}")
	public Optional<Event> onevent(@PathVariable("id") int id)
	{
		return eservices.oneevent(id);
	}
	
	@GetMapping("/futureevent")
	public List<Event> futuree()
	{
		return eservices.futureevent();
	}
	
	/* List<Event> events=eservices.getall();
	  events.forEach(event ->{
		  if(event.getEventimg()!=null) {
			  String base64Image=Base64.getEncoder().encodeToString(event.getEventimg());
			  event.setBase64Image(base64Image);
		  }
	  });*/
}
