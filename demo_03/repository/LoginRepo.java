package com.example.demo.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
@Transactional
public interface LoginRepo extends JpaRepository<Login, Integer> {
	
	@Query("select l from Login l where l.username= :un and l.password= :pwd")
	public Optional<Login> getLogin(@Param(value="un") String un,@Param(value="pwd") String pwd);
}
