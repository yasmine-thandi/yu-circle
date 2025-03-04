package com.yucircle.community_service.model;

import jakarta.persistence.*;

@Entity
@Table(name = "profile_tags")
public class ProfileTag {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "username")
    private Profile profile;

    @ManyToOne
    @JoinColumn(name = "tag")
    private Tag tag;
    
    
    protected ProfileTag() {}
    
	public ProfileTag(Profile profile, Tag tag) {
		this.profile = profile;
		this.tag = tag;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Profile getProfile() {
		return profile;
	}

	public void setProfile(Profile profile) {
		this.profile = profile;
	}

	public Tag getTag() {
		return tag;
	}

	public void setTag(Tag tag) {
		this.tag = tag;
	}

	@Override
	public String toString() {
		return "ProfileTag [profile=" + profile + ", tag=" + tag + "]";
	}    
}
