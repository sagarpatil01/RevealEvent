package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Organizer;
import com.example.demo.entities.OrganizerRegestration;
import com.example.demo.entities.User_type;
import com.example.demo.service.LoginService;
import com.example.demo.service.OrganizerService;
import com.example.demo.service.User_typeService;

@RestController
public class OganizerController {
	
	@Autowired
	User_typeService outservice;
	
	@Autowired
	LoginService olservice;
	
	@Autowired
	OrganizerService oservice;
	
	@PostMapping("/insertorganizer")
	public Organizer save(OrganizerRegestration or)
	{
		User_type ui=outservice.getbyid(2);
		
		Login lo=new Login(or.getUsername(),or.getPassword(),ui);
		Login saveo=olservice.insertlogin(lo);
		
		Organizer o=new Organizer(or.getCompany_name(),or.getLicence_no(),or.getEmail(),or.getContact_no(),saveo);
		return oservice.inertorganizer(o);
		
	}
	
	@GetMapping("/getorganizer")
	public List<Organizer> fetchall()
	{
		return oservice.getall();
	}

}
