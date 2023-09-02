package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Artist_request;
import com.example.demo.entities.Customer;
import com.example.demo.repository.Artist_requestRepo;

@Service
public class Artist_RequestService {

	@Autowired
	Artist_requestRepo arrepo;
	
	public Artist_request insertrequest(Artist_request a)
	{
		return arrepo.save(a);
	}
	
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
	
	/*public void upstatus(Artist_request a)
	{
		arrepo.save(a);
	}*/
	
	public List<Artist_request> byart(int aid)
	{
		return arrepo.byartist(aid);
	}
	
	public List<Artist_request> byorg(int oid)
	{
		return arrepo.byorganizer(oid);
	}
}
