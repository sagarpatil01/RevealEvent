package com.example.demo.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Event;
import com.example.demo.entities.Genre_category;
import com.example.demo.entities.Organizer;
import com.example.demo.entities.Venue;
import com.example.demo.repository.EventRepo;

@Service
public class EventService {

	@Autowired
	EventRepo erepo;
	
	public List<Event> getall()
	{
		return erepo.findAll();
	}
	
	public Event getevent(int gid)
	{
		Event e;
		Optional<Event> en=erepo.getname(gid);
		try
		{
			e=en.get();
			
		}
		catch(Exception es)
		{
			e=null;
		}
		return e;
	}
	
	public Event saveevent(Event e)
	{
		return erepo.save(e);
	}

	
}
