package com.yucircle.community_service.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yucircle.community_service.model.Profile;
import com.yucircle.community_service.model.ProfileTagsDTO;
import com.yucircle.community_service.repositories.ProfileRepository;
import com.yucircle.community_service.repositories.ProfileTagRepository;

@Service
public class CommunityService {
	
	@Autowired
    private ProfileRepository profileRepository;
    
    @Autowired
    private ProfileTagRepository pTagRepository;
	
	/**
	 * Create list of community 'profiles' 
	 * Profiles (or ProfileTagsDTO) contains a username and a set of associated tags
	 * @return list of all ProfileTagsDTO 
	 */
	public List<ProfileTagsDTO> getDefaultProfiles() {
		List<ProfileTagsDTO> list = new ArrayList<ProfileTagsDTO>();
		
		for (Profile user: profileRepository.findAll()) 
		{
			ProfileTagsDTO pt = new ProfileTagsDTO();
			pt.setUsername(user.getUsername());
			pt.setTags(pTagRepository.findTagsByUsername(user.getUsername()));
			list.add(pt);
		}
		
		return list;
	}
	
	/**
	 * Create list of Recommended Profiles
	 * Recommendations are based off username's tags
	 * Any other username with a matching tag will get added to the list
	 * @param username, username to recommend profiles to
	 * @return list of recommended ProfileTagsDTO
	 * @throws Exception if username does not exist
	 */
	public List<ProfileTagsDTO> getRecommendedProfiles(String username) throws Exception {
		
		//check if username exists
		if (!profileRepository.existsById(username)) {
			throw new Exception("username does not exist!");
		}
		
		//get all user tags
		Set<String> userTags = pTagRepository.findTagsByUsername(username);
		
		//get all users with shared tags
        List<Object[]> results = pTagRepository.findUsersByTags(userTags);
        
        //build recommendations
        
        Map<String, Set<String>> userTagsMap = new HashMap<>();
        
        //filter through results, add users and tags to map, ignore given username
        for (Object[] result : results) {        	
            String user = (String) result[0];
            String tag = (String) result[1];
            if (!user.equals(username)) {
                userTagsMap.computeIfAbsent(user, k -> new HashSet<>()).add(tag);
            }
        }
        
        //create list
        List<ProfileTagsDTO> listOfRecommendedUsers = new ArrayList<>();
        for (Map.Entry<String, Set<String>> entry : userTagsMap.entrySet()) {
            ProfileTagsDTO pt = new ProfileTagsDTO();
            pt.setUsername(entry.getKey());
            pt.setTags(entry.getValue());
            listOfRecommendedUsers.add(pt);
        }
		
		return listOfRecommendedUsers;
	}
	
}
