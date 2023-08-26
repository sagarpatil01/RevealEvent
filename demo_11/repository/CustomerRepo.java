package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;


@Repository
@Transactional
public interface CustomerRepo extends JpaRepository<Customer, Integer> {

	@Query(value="select * from customer  where login_id= :lid",nativeQuery = true)
	public Optional<Customer> getname(@Param("lid")int lid);
}
