package com.example.demo.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Event_artist;

@Repository
@Transactional
public interface Event_artistRepo extends JpaRepository<Event_artist, Integer> {
 
	@Query("select e.event_name,a.first_name from Event_artist ea,Event e,Artist a where ea.event_id= :eid and ea.artist_id= :aid")
	public Optional<Event_artist> get(@Param(value="eid") int eid,@Param(value="aid") int aid);
	
	
}
