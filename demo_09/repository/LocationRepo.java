package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Location;
@Repository
@Transactional
public interface LocationRepo extends JpaRepository<Location, Integer> {
	
	

}
