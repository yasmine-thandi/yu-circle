package com.yucircle.community_service.repositories;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.yucircle.community_service.model.ProfileTag;
import com.yucircle.community_service.model.ProfileTagsDTO;

public interface ProfileTagRepository extends JpaRepository<ProfileTag, Long> {
	//Custom Queries

	//given set of tags, find all associated users
    @Query("SELECT pt.profile.username, pt.tag.tag FROM ProfileTag pt WHERE pt.profile.username IN " +
            "(SELECT pt2.profile.username FROM ProfileTag pt2 WHERE pt2.tag.tag IN :tags)")
     List<ProfileTagsDTO> findUsersByTags(@Param("tags") Set<String> tags);
}