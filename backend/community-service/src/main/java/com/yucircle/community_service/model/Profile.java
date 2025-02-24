package com.yucircle.community_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "profiles")
public class Profile {

	@Id
	private String username;
	
	
	public Profile() {}
	
	public Profile(String username) {
		this.username = username;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	@Override
    public String toString() {
        return this.username;
    }
}
