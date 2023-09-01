package com.example.demo.controller;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Artist;
import com.example.demo.entities.Artist_request;
import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegestration;
import com.example.demo.entities.Login;
import com.example.demo.entities.Organizer;
import com.example.demo.entities.User_type;
import com.example.demo.service.Artist_RequestService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class Artist_requestController {

	@Autowired
	Artist_RequestService arservice;
	
	@PostMapping("/insertartistreq")
	public Artist_request saveall(@RequestBody Artist_request ar)
	
	{
		
		Organizer org_id=ar.getOrg_id();
		Artist art_id=ar.getArt_id();
		boolean status=false;

	    Artist_request a=new Artist_request(org_id,art_id,status);
		return arservice.insertrequest(ar);
	}
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
	
	/*@PutMapping("/updatestatus")
	public void updatestatus(@PathVariable Artist_request ar)
	{
		
		
		 
	}*/
	
	@GetMapping("/getbyartist")
	public List<Artist_request> artistreq(@Param("art_id") int art_id)
	{
		return arservice.byart(art_id);
	}
	
	@PutMapping("/updatestatus/{id}")
	public void updatestatus(@PathVariable("id") int id)
	{
		arservice.updstatus(id);
	}
	
	@GetMapping("/getbyorg")
	public List<Artist_request> byorga(@Param("oid") int oid)
	{
		return arservice.byorg(oid);
	}
	
}
