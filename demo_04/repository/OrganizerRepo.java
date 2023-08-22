package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Organizer;

@Repository
@Transactional
public interface OrganizerRepo extends JpaRepository<Organizer, Integer> {

}
