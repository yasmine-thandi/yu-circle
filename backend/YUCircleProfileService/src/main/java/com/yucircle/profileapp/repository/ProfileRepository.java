package com.yucircle.profileapp.repository;

import com.yucircle.profileapp.model.Profile;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, String> {
	Optional<Profile> findByResetToken(String resetToken);
	Profile findByEmail(String email);

}