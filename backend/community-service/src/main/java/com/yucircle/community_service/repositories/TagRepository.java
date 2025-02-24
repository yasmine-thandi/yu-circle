package com.yucircle.community_service.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yucircle.community_service.model.Tag;

public interface TagRepository extends JpaRepository<Tag, String> {}
