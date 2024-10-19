package com.microteam.ecommerce.service;

import com.microteam.ecommerce.model.Order;
import com.microteam.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    // Method to get all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Method to get a specific order by ID
    public Order getOrderById(Long id) {
        Optional<Order> order = orderRepository.findById(id);
        return order.orElse(null); // Return null if the order is not found
    }

    // Method to create a new order
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    // Method to update an existing order
    public Order updateOrder(Long id, Order updatedOrder) {
        Optional<Order> existingOrder = orderRepository.findById(id);
        if (existingOrder.isPresent()) {
            Order order = existingOrder.get();
            // Update order fields as needed
            order.setProducts(updatedOrder.getProducts());
            order.setTotalPrice(updatedOrder.getTotalPrice());
            order.setOrderDate(updatedOrder.getOrderDate());
            order.setStatus(updatedOrder.getStatus());
            // Save and return the updated order
            return orderRepository.save(order);
        }
        return null; // Return null if the order is not found
    }

    // Method to delete an order by ID
    public boolean deleteOrder(Long id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
            return true;
        }
        return false; // Return false if the order does not exist
    }
}
