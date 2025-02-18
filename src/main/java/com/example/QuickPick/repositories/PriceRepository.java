package com.example.QuickPick.repositories;

import com.example.QuickPick.model.PriceEntity;
import com.example.QuickPick.model.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PriceRepository extends JpaRepository<PriceEntity,Long> {

    List<PriceEntity> getPricesByProduct(ProductEntity productEntity);
}
