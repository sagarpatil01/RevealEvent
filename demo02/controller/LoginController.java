package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.service.LoginService;

@RestController
public class LoginController {
	@Autowired
	LoginService lservice;
	@GetMapping("/artistlogin")
	public List<Login> fetchall()
	{
		return lservice.getall();
	}

}
