package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Event;

@Repository
@Transactional
public interface EventRepo extends JpaRepository<Event, Integer> {

	@Query(value="select * from event where genre_cat_id= :gid and event_date >= CURRENT_DATE",nativeQuery = true)
	public List<Event> getname(@Param("gid")int gid);
	
	@Query("select e from Event e where e.event_date >= CURRENT_DATE")
	public List<Event> bydate();
	
	@Modifying
	@Query("update Event set img_landscape = :file where id= :id")
	//@Query(value="update event set img_landscape= :file where id= :id",nativeQuery = true)
	public int uploadimg(int id,byte [] file);
}
