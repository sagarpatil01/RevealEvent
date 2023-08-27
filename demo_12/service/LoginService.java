package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repository.LoginRepo;

@Service
public class LoginService {

	@Autowired
	LoginRepo lrepo;
	
	public Login insertlogin(Login l)
	{
		return lrepo.save(l);
	}
	
	public Login getbyid(int id)
	{
		return lrepo.findById(id).get();
	}
	
	public List<Login> getall()
	{
		return lrepo.findAll();
	}
	
	public Login getLogin(String un,String pwd)
	{
		Login l;
		Optional<Login> ol=lrepo.getLogin(un, pwd);
		try
		{
			l=ol.get();
			
		}
		catch(Exception e)
		{
			l=null;
		}
		return l;
	}
}
