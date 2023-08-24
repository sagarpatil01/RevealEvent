package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Event;
import com.example.demo.repository.EventRepo;

@Service
public class EventService {

	@Autowired
	EventRepo erepo;
	
	public List<Event> getall()
	{
		return erepo.findAll();
	}
}
