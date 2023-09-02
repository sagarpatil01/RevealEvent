package com.example.demo.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Organizer;

@Repository
@Transactional
public interface OrganizerRepo extends JpaRepository<Organizer, Integer> {

	@Query(value="select * from organizer  where login_id= :lid",nativeQuery = true)
	public Optional<Organizer> getname(@Param("lid")int lid);
}
