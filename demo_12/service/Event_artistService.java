package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Event_artist;
import com.example.demo.entities.Login;
import com.example.demo.repository.Event_artistRepo;
@Service
public class Event_artistService {

	@Autowired
	Event_artistRepo earepo;;
	
	public List<Event_artist> getall()
	{
		return earepo.findAll();
	}
	
	/*public Optional<Event_artist> getLogin(int eid,int aid)
	{
		Event_artist ea;
		Optional<Event_artist> ol=earepo.get(eid, aid);
		try
		{
			ea=ol.get();
			
		}
		catch(Exception e)
		{
			ea=null;
		}
		return ea;
	}*/
}
