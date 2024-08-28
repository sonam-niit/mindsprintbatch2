package com.mindspring.restapi.repo;

import com.mindspring.restapi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product,Integer> {
}
