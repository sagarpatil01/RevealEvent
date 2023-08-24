package com.example.demo.service;

import java.util.List;

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
	
	public List<Location> getall()
	{
		return lcrepo.findAll();
	}
}
