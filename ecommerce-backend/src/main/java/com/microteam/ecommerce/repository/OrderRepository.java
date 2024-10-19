package com.microteam.ecommerce.repository;

import com.microteam.ecommerce.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    // Custom query method to find orders by user ID
    List<Order> findByUserId(Long userId);

    // Custom query method to find orders by status
    List<Order> findByStatus(String status);
}
