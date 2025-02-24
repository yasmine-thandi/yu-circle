package com.yucircle.community_service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yucircle.community_service.model.Profile;
import com.yucircle.community_service.model.ProfileTagsDTO;
import com.yucircle.community_service.service.CommunityService;

@RestController
@RequestMapping("community")
public class CommunityProfileController {
	
	//Autowired auto injects instance of CommunityService
	@Autowired
	private CommunityService commService;
	
	@GetMapping("/get-default-profiles")
	public List<ProfileTagsDTO> getDefaultProfiles() {
		return commService.getDefaultProfiles();
	}
	
	@GetMapping("/get-recommended-profiles")
	public List<ProfileTagsDTO> getRecommendedProfiles(@RequestBody Profile profile) throws Exception {
		return commService.getRecommendedProfiles(profile.getUsername());
	}
}
