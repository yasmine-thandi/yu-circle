package com.yucircle.community_service.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tags")
public class Tag {

	@Id
	private String tag;
	
	@ManyToMany(mappedBy = "tags", fetch = FetchType.LAZY)
    private Set<Profile> profiles = new HashSet<>();
	
	public Tag() {}

	public Tag(String tag) {
		this.tag = tag;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}
	
	public Set<Profile> getProfiles() {
		return profiles;
	}

	public void setProfiles(Set<Profile> profiles) {
		this.profiles = profiles;
	}
	
	@Override
    public String toString() {
        return this.tag;
    }
	
}
