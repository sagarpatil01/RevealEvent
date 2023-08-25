package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Genre_category;
import com.example.demo.service.Genre_categoryService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Genre_categoryController {

	@Autowired
	Genre_categoryService geservice;
	
	@GetMapping("/getallgenre")
	public List<Genre_category> all()
	{
		return geservice.getall();
	}
}
