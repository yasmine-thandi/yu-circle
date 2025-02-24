package com.yucircle.community_service.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yucircle.community_service.model.Profile;

public interface ProfileRepository extends JpaRepository<Profile, String> {}
