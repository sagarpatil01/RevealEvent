package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Location;
import com.example.demo.repository.LocationRepo;
@Service
public class LocationService {

	@Autowired
	LocationRepo lcrepo;
	
	public Location getloc(int id)
	{
		return lcrepo.findById(id).get();
	}
}
