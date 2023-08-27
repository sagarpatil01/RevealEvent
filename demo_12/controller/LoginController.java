package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.service.LoginService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

	@Autowired
	LoginService logservice;
	
	@GetMapping("/cutomerlogin")
	public List<Login> fetchall(){
		return logservice.getall();
	}
	
	@PostMapping("/login")
	public Login chkLogin(@RequestBody LoginCheck lcheck)
	{
		return logservice.getLogin(lcheck.getUsername(),lcheck.getPassword());
	}
	
}
