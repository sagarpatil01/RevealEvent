package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Artist_request;
import com.example.demo.repository.Artist_requestRepo;

@Service
public class Artist_RequestService {

	@Autowired
	Artist_requestRepo arrepo;
	
	public List<Artist_request> getall()
	{
		return arrepo.findAll();
	}
	
	public void delbyid(int id)
	{
		arrepo.deleteById(id);
	}
	
	public void updstatus(int id)
	{
		arrepo.updatesta(id);
	}
}
