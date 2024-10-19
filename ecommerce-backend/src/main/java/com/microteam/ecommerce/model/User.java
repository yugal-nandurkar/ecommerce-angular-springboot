package com.microteam.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users") // Table name in the database
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Unique identifier for the user

    @Column(nullable = false, unique = true)
    private String username; // Username of the user

    @Column(nullable = false)
    private String password; // User's password (should be hashed in production)

    @Column(nullable = false, unique = true)
    private String email; // User's email address

    @Column(name = "first_name")
    private String firstName; // User's first name

    @Column(name = "last_name")
    private String lastName; // User's last name

    private String role; // User role (e.g., USER, ADMIN)

    // Add any additional fields like address, phone number, etc. as needed

    // Optionally, you can include methods for business logic related to users
}
