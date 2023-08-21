package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
@Transactional
@Repository
public interface LoginRepo extends JpaRepository<Login, Integer> {

}
