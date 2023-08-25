package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Event;

@Repository
@Transactional
public interface EventRepo extends JpaRepository<Event, Integer> {

	@Query(value="select * from event where genre_cat_id= :gid",nativeQuery = true)
	public List<Event> getname(@Param("gid")int gid);
}
