package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User_type;
import com.example.demo.repository.User_typeRepo;

@Service
public class User_typeService {
	
	@Autowired
	User_typeRepo utrepo;

	public User_type getbyid(int id)
	{
		return utrepo.findById(id).get();
	}
}
