package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Venue;
import com.example.demo.repository.VenueRepo;

@Service
public class VenueService {

	@Autowired
	VenueRepo verepo;
	
	public List<Venue> getall()
	{
		return verepo.findAll();
	}
	
	public Venue getbyid(int id)
	{
		return verepo.findById(id).get();
	}
}
