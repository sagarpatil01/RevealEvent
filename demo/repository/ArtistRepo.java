package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Artist;


@Transactional
@Repository
public interface ArtistRepo extends JpaRepository<Artist, Integer> {

	@Query(value="select * from artist  where login_id= :lid",nativeQuery = true)
	public Optional<Artist> getname(@Param("lid")int lid);
	
	@Query(value="select * from artist  where genre_cat_id= :gid",nativeQuery = true)
	public List<Artist> getartist(@Param("gid") int gid);
	
	@Query(value="SELECT * from artist a where a.id not in(select b.art_id from artist_request b where b.org_id= :oid)",nativeQuery = true)
	public List<Artist> forreq(@Param("oid") int oid);
} 
