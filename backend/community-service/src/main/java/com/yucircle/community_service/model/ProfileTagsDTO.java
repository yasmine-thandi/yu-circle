package com.yucircle.community_service.model;

import java.util.Set;

public class ProfileTagsDTO {
	
	private String username;
    private Set<String> tags;
    
    
    public ProfileTagsDTO() {}

    public ProfileTagsDTO(String username, Set<String> tags) {
        this.username = username;
        this.tags = tags;
    }
    
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<String> getTags() {
        return tags;
    }

    public void setTags(Set<String> tags) {
        this.tags = tags;
    }
}
