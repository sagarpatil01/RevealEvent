package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Ticket_booking;

@Repository
@Transactional
public interface Ticket_bookingRepo extends JpaRepository<Ticket_booking, Integer> {
 
	@Query(value="select * from ticket_booking where customer_id= :uid",nativeQuery = true)
	public List<Ticket_booking> getbyuid(@Param("uid") int uid);
}