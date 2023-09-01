package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Artist;
import com.example.demo.entities.ArtistRegistration;
import com.example.demo.entities.Genre_category;
import com.example.demo.entities.Login;
import com.example.demo.entities.Organizer;
import com.example.demo.entities.User_type;
import com.example.demo.service.ArtistService;
import com.example.demo.service.Genre_categoryService;
import com.example.demo.service.LoginService;
import com.example.demo.service.User_typeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ArtistController {

	@Autowired
	ArtistService aservice;
	@Autowired
	Genre_categoryService gcservice;
	@Autowired
	User_typeService uservice;
	@Autowired
	LoginService lservice;
	
	@PostMapping("/insertartist")
	public Artist saveall(@RequestBody ArtistRegistration ar)
	{
		String username=ar.getUsername();
		String password=ar.getPassword();
		User_type ua=uservice.getbyid(3);
		Login la=new Login(username,password,true,ua);
		Login saveda=lservice.insertlogin(la);
		
		String fname=ar.getFirst_name();
		String lname=ar.getLast_name();
		String email=ar.getEmail();
		String contact_no=ar.getContact_no();
		String description=ar.getDescription();
		String sm1=ar.getSocial_media1();
		String sm2=ar.getSocial_media2();
		String sm3=ar.getSocial_media3();
		int g=ar.getGenid();
		Genre_category gc=gcservice.getbyid(g);
		Artist a2=new Artist(fname,lname,email,contact_no,description,sm1,sm2,sm3,saveda,gc);
		return aservice.insertArtist(a2);
		
	}
	
	@GetMapping("/getartist")
	public List<Artist> all()
	{
		return aservice.getAll();
	}
	
	@GetMapping("/getarname")
	public Artist byloginid(@RequestParam("login_id") int l)
	{
		return aservice.getLogin(l);
	}
	
	@GetMapping("/getbygid")
	public List<Artist> getartistbygid(@Param("gid") int gid)
	{
		return aservice.artistbygid(gid);
	}
	
	@GetMapping("/forrequest")
	public List<Artist> forartistreq(@Param("oid") int oid)
	{
		return aservice.forrequest(oid);
	}
}
