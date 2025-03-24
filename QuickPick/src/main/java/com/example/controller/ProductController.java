package com.example.controller;

import com.example.model.ProductModel;
import com.example.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5174")  // Allow frontend requests
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/category/{category}")
    public List<ProductModel> getProductsByCategory(@PathVariable String category) {
        return productService.getProductsByCategory(category);
    }

    @GetMapping("/{name}")
public ResponseEntity<?> getProductByName(@PathVariable String name) {
    try {
        ProductModel product = productService.getProductByName(name);
        if (product == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Collections.singletonMap("error", "Product not found"));
        }
        return ResponseEntity.ok(product);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(Collections.singletonMap("error", e.getMessage()));
    }
}


    @PostMapping
    public ProductModel addProduct(@RequestBody ProductModel product) {
        return productService.addProduct(product);
    }

    @GetMapping("/test")
    public String test() {
    return "API is working!";
    }
}
