package com.example.repo;

import com.example.model.ProductModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<ProductModel, String> {
    List <ProductModel> findByCategoryIgnoreCase(String category);
    ProductModel findByNameIgnoreCase(String name);
}
