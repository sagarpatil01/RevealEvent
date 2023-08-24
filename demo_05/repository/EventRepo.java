package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Event;

@Repository
@Transactional
public interface EventRepo extends JpaRepository<Event, Integer> {

	
}
