package com.microteam.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products") // Table name in the database
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Unique identifier for the product

    @Column(nullable = false)
    private String name; // Name of the product

    @Column(nullable = false)
    private String brand; // Brand of the product

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description; // Description of the product

    @Column(nullable = false)
    private Double price; // Price of the product

    @Column(nullable = false)
    private String category; // Category of the product (e.g., Electronics, Fashion)

    @Column(nullable = false)
    private Integer stockQuantity; // Available stock quantity

    @Column(name = "release_date")
    private String releaseDate; // Release date of the product

    private String imageUrl; // URL for the product image

    @Column(nullable = false)
    private Boolean isAvailable; // Product availability status

    // Optionally, you can include additional methods for business logic related to products
}
