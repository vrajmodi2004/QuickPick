package com.example.service;

import com.example.model.ProductModel;
import com.example.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductModel> getProductsByCategory(String category) {
        List <ProductModel> products = productRepository.findByCategoryIgnoreCase(category);
        System.out.println("Found " + products + " products for category: " + category);
        return products;
    }

    public ProductModel getProductByName(String name) {
        System.out.println("Looking for product with name: " + name);
        ProductModel product = productRepository.findByNameIgnoreCase(name);
        if (product == null) {
            System.out.println("No product found with name: " + name);
        } else {
            System.out.println("Found product: " + product.getName() + ", ID: " + product.getId());
        }
        return product;
    }

    public ProductModel addProduct(ProductModel product) {
        return productRepository.save(product);
    }

    
}


