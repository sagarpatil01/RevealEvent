package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Artist;
import com.example.demo.entities.Customer;
import com.example.demo.repository.ArtistRepo;



@Service
public class ArtistService {
	@Autowired
	ArtistRepo artistrepo;
	
	public Artist getbyid(int id)
	{
		return artistrepo.findById(id).get();
	}
	
	public Artist insertArtist(Artist a)
	{
		return artistrepo.save(a);
	}
	
	public List<Artist> getAll()
	{
		return artistrepo.findAll();
	}

	public Artist getLogin(int lid)
	{
		Artist a;
		Optional<Artist> an=artistrepo.getname(lid);
		try
		{
			a=an.get();
			
		}
		catch(Exception e)
		{
			a=null;
		}
		return a;
	}
	
	public List<Artist> artistbygid(int gid)
	{
		return artistrepo.getartist(gid);
	}
	
	public List<Artist> forrequest(int oid)
	{
		return artistrepo.forreq(oid);
	}
}
