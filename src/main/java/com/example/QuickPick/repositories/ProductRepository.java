package com.example.QuickPick.repositories;

import com.example.QuickPick.model.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<ProductEntity,Long> {

    List<ProductEntity> getProductByCategory(String category);

    Optional<ProductEntity> searchProduct(String entry);
}
