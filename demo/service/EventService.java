package com.example.demo.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

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
	
	/*public Event getevent(int gid)
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
	}*/
	
	public List<Event> allfor(int id)
	{
		return erepo.getname(id);
	}
	
	public Event saveevent(Event e)
	{
		return erepo.save(e);
	}
	
	public Optional<Event> oneevent(int id)
	{
		return erepo.findById(id);
	}
	
	public List<Event> futureevent()
	{
		return erepo.bydate();
	}
	
	public Event eventid(int id)
	{
		return erepo.findById(id).get();
	}
    
    public boolean upload(int id,byte [] photo)
    {
    	System.out.println("in service");
    	int n = erepo.uploadimg(id, photo);
    	System.out.println(n);
    	if(n==1)
    		return true;
    	else
    		return false;
    }
    
    
    
    
	
}
