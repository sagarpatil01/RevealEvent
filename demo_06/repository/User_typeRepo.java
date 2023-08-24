package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User_type;

@Repository
@Transactional
public interface User_typeRepo extends JpaRepository<User_type, Integer> {

}
