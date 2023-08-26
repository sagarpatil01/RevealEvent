package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Artist_request;
import com.example.demo.service.Artist_RequestService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Artist_requestController {

	@Autowired
	Artist_RequestService arservice;
	
	@GetMapping("/request")
	public List<Artist_request> all()
	{
		return arservice.getall();
	}
	
	@DeleteMapping("/deleterequest/{id}")
	public void dele(@PathVariable("id")int id)
	{
		arservice.delbyid(id);
	}
	
	@PutMapping("/updatestatus")
	public void updatestatus(@Param("id") int id)
	{
		arservice.updstatus(id);
		 
	}
	
	
}
