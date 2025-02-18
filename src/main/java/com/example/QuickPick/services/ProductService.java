package com.example.QuickPick.services;

import com.example.QuickPick.model.ProductEntity;
import com.example.QuickPick.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductEntity> getProductByCategory(String category) {
        return productRepository.getProductByCategory(category);
    }

    public Optional<ProductEntity> searchProduct(String entry) {
        return productRepository.searchProduct(entry);
    }
}
