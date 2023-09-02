package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Artist_request;
@Repository
@Transactional
public interface Artist_requestRepo extends JpaRepository<Artist_request, Integer> {

	@Modifying
	@Query("update Artist_request ar set status= true where id= :id")
	public void updatesta(@Param("id") int id);
	
	@Query(value="select * from artist_request where status=false and art_id= :aid",nativeQuery = true)
	public List<Artist_request> byartist(@Param("aid") int aid);
	
	@Query(value="select * from artist_request where status=true and org_id= :oid",nativeQuery = true)
	public List<Artist_request> byorganizer(@Param("oid") int oid);
}

