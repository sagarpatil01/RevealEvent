package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Genre_category;
@Transactional
@Repository
public interface Genre_categoryRepo extends JpaRepository<Genre_category, Integer> {

	
}
