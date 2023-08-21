package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Artist;
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

}
