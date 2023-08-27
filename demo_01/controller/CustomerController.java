package com.example.demo.controller;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegestration;
import com.example.demo.entities.Login;
import com.example.demo.entities.User_type;
import com.example.demo.service.CustomerService;
import com.example.demo.service.LoginService;
import com.example.demo.service.User_typeService;

@RestController
public class CustomerController {

	@Autowired
	CustomerService cservice;
	
	@Autowired
	User_typeService utservice;
	@Autowired
	LoginService lservice;
	
	@GetMapping("/getall")
	public List<Customer> findall()
	{
		return cservice.getall();
	}
	
	@PostMapping("/insert")
	public Customer saveall(CustomerRegestration cr)
	
	{
		String username=cr.getUsername();
		String password=cr.getPassword();
		User_type u=utservice.getbyid(1);
		Login l=new Login(username,password,u);
		Login saved=lservice.insertlogin(l);
		
		String first_name=cr.getFirst_name();
		String last_name=cr.getLast_name();
		String email=cr.getEmail();
	    String contact_no=cr.getContact_no();
	    Date birthdate=cr.getBirthdate();
        String identity=cr.getIdentity();
        String married=cr.getMarried();
	    String address=cr.getAddress();
	    
	    Customer c=new Customer(first_name,last_name,email,contact_no,birthdate,identity,married,address,saved);
	    return cservice.insertcustomer(c);
	}
	
}