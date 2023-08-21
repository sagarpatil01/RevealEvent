package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repository.LoginRepo;
@Service
public class LoginService {
	@Autowired
	LoginRepo lrepo;
	
	public Login insertLogin(Login l)
	{
		return lrepo.save(l);
	}
	
	public List<Login> getall()
	{
		return lrepo.findAll();
	}
	
	

}
