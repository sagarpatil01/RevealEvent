package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Organizer;
import com.example.demo.repository.OrganizerRepo;

@Service
public class OrganizerService {

	@Autowired
	OrganizerRepo orepo;
	
	public Organizer inertorganizer(Organizer o) {
		return orepo.save(o);
	}
	
	public List<Organizer> getall()
	{
		return orepo.findAll();
	}
	
	public Organizer getLogin(int lid)
	{
		Organizer o;
		Optional<Organizer> cn=orepo.getname(lid);
		try
		{
			o=cn.get();
			
		}
		catch(Exception e)
		{
			o=null;
		}
		return o;
	}
	
	public Organizer getbyid(int id)
	{
		return orepo.findById(id).get();
	}
}
