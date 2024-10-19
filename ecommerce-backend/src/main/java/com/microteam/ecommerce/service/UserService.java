package com.microteam.ecommerce.service;

import com.microteam.ecommerce.model.User;
import com.microteam.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Method to get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Method to find a user by ID
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id); // Returning Optional
    }

    // Method to create a new user
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Method to update an existing user
    public User updateUser(Long id, User updatedUser) {
        Optional<User> existingUser = userRepository.findById(id);

        if (existingUser.isPresent()) {
            User user = existingUser.get();
            // Update the fields as needed
            user.setUsername(updatedUser.getUsername());
            user.setEmail(updatedUser.getEmail());
            user.setFirstName(updatedUser.getFirstName());
            user.setLastName(updatedUser.getLastName());
            // Save and return the updated user
            return userRepository.save(user);
        }
        return null; // or throw an exception if user not found
    }

    // Method to delete a user by ID
    public boolean deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false; // return false if the user does not exist
    }
}
