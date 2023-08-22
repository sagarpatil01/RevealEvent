package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
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

}
