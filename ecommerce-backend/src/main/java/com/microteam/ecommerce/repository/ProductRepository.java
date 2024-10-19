package com.microteam.ecommerce.repository;

import com.microteam.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Custom query method to find products by category
    List<Product> findByCategory(String category);

    // Custom query method to find products by name
    List<Product> findByNameContainingIgnoreCase(String name);
}
