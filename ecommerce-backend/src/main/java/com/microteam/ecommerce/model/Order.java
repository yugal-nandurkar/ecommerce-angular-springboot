package com.microteam.ecommerce.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders") // Table name in the database
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Unique identifier for the order

    @ManyToOne // Relationship with User
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // User who placed the order

    @ElementCollection // To store multiple products in an order
    private List<Long> productIds; // List of product IDs in the order

    @Column(nullable = false)
    private Double totalPrice; // Total price of the order

    @Column(nullable = false)
    private String status; // Order status (e.g., PENDING, SHIPPED, DELIVERED)

    @Column(name = "order_date", nullable = false)
    private LocalDateTime orderDate; // Date and time when the order was placed

    // You can add any additional fields related to orders, like shipping address, etc.

    @OneToMany(mappedBy = "order")
    private List<Product> products;

    // Getter for products
    public List<Product> getProducts() {
        return products;
    }

    // Other getters and setters...
}
