package com.yucircle.community_service.model;

import java.util.HashSet;
import java.util.Set;

public class ProfileTagsDTO {
	
	private String username;
    private Set<String> tags = new HashSet<String>();
    
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

    public void setTagsString(Set<String> tags) {
        this.tags = tags;
    }
    
    public void setTags(Set<Tag> tags) {
    	for (Tag t : tags) 
    	{
    		this.tags.add(t.getTag());
    	}
    }
}
