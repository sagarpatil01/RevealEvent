package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repository.CustomerRepo;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepo crepo;
	
	public Customer insertcustomer(Customer c)
	{
		return crepo.save(c);
	}
	
	public List<Customer> getall()
	{
		return crepo.findAll();
	}
	
	public Customer getLogin(int lid)
	{
		Customer c;
		Optional<Customer> cn=crepo.getname(lid);
		try
		{
			c=cn.get();
			
		}
		catch(Exception e)
		{
			c=null;
		}
		return c;
	}
	
	public Customer custid(int id)
	{
		return crepo.findById(id).get();
	}

}
