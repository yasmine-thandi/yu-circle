package com.yucircle.community_service.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yucircle.community_service.model.Profile;

public interface ProfileRepository extends JpaRepository<Profile, String> {
	
	//Custom Queries
	
	//Find profiles that could fulfill query, currently searches through first and last names
	@Query("SELECT p FROM Profile p WHERE " + 
	"LOWER(p.firstname) LIKE LOWER(CONCAT(:searchText, '%')) OR " + 
	"LOWER(p.lastname) LIKE LOWER(CONCAT(:searchText, '%'))")
	List<Profile> findProfileBySearch(@Param("searchText") String searchText);
	
}
