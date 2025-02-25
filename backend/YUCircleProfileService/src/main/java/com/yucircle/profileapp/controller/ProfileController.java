package com.yucircle.profileapp.controller;

import com.yucircle.profileapp.model.Profile;
import com.yucircle.profileapp.service.ProfileService;
import com.yucircle.profileapp.service.EmailService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/profiles")
public class ProfileController {

    private final ProfileService profileService;
    private final EmailService emailService;

    public ProfileController(ProfileService profileService, EmailService emailService) {
        this.profileService = profileService;
        this.emailService = emailService;
    }

    // @GetMapping for GET requests.
    @GetMapping
    public List<Profile> getAllProfiles() {
        return profileService.getAllProfiles();
    }

    // @PathVariable for binding the parameter to the URL.
    @GetMapping("/{username}")
    public ResponseEntity<Profile> getProfile(@PathVariable String username) {
        Optional<Profile> optionalProfile = profileService.getProfileByUsername(username);
        if (optionalProfile.isPresent()) {
            return ResponseEntity.ok(optionalProfile.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // @PostMapping handles POST requests.
    // @RequestBody for binding request to parameter.
    @PostMapping
    public Profile createProfile(@RequestBody Profile profile) {
        return profileService.createProfile(profile);
    }

    // @PutMapping handles PUT requests.
    @PutMapping("/{username}")
    public ResponseEntity<Profile> updateProfile(@PathVariable String username, @RequestBody Profile profile) {
        try {
            Profile updatedProfile = profileService.updateProfile(username, profile);
            return ResponseEntity.ok(updatedProfile);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // @PostMapping handles password reset requests.
    // Generates a reset token and sends a reset link via email.
    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody String email) {
        Profile profile = profileService.findByEmail(email);
        if (profile == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        // Generate a unique reset token
        String resetToken = UUID.randomUUID().toString();
        profile.setResetToken(resetToken);
        profileService.saveProfile(profile);

        // Send reset link via email
        emailService.sendResetEmail(email, resetToken);
        return ResponseEntity.ok("Reset link sent to email");
    }

    // @PostMapping handles setting a new password.
    // Validates the reset token and updates the password.
    @PostMapping("/set-new-password")
    public ResponseEntity<String> setNewPassword(@RequestParam String token, @RequestBody String newPassword) {
        boolean success = profileService.resetPassword(token, newPassword);
        if (success) {
            return ResponseEntity.ok("Password reset successful");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid or expired token");
        }
    }
}
