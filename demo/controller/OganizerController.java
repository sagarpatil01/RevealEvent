package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Organizer;
import com.example.demo.entities.OrganizerRegestration;
import com.example.demo.entities.User_type;
import com.example.demo.service.LoginService;
import com.example.demo.service.OrganizerService;
import com.example.demo.service.User_typeService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OganizerController {
	
	@Autowired
	User_typeService outservice;
	
	@Autowired
	LoginService olservice;
	
	@Autowired
	OrganizerService oservice;
	
	@PostMapping("/insertorganizer")
	public Organizer save(@RequestBody OrganizerRegestration or)
	{
		User_type ui=outservice.getbyid(2);
		
		Login lo=new Login(or.getUsername(),or.getPassword(),false,ui);
		Login saveo=olservice.insertlogin(lo);
		
		Organizer o=new Organizer(or.getCompany_name(),or.getLicence_no(),or.getEmail(),or.getContact_no(),saveo);
		return oservice.inertorganizer(o);
		
	}
	
	@GetMapping("/getorganizer")
	public List<Organizer> fetchall()
	{
		return oservice.getall();
	}
	
	@GetMapping("/getorname")
	public Organizer byloginid(@RequestParam("login_id") int l)
	{
		return oservice.getLogin(l);
	}

}
