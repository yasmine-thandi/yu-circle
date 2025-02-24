package com.yucircle.community_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tags")
public class Tag {

	@Id
	private String tag;
	
	
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
	
	@Override
    public String toString() {
        return this.tag;
    }
	
}
