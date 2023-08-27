package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Genre_category;
import com.example.demo.repository.Genre_categoryRepo;
@Service
public class Genre_categoryService {
	@Autowired
	Genre_categoryRepo genreRepo;
	
	public Genre_category getbyid(int id)
	{
		return genreRepo.findById(id).get();
	}
	
	public List<Genre_category> getall()
	{
		return genreRepo.findAll();
	}

}
