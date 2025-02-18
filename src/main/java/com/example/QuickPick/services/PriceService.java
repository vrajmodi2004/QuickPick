package com.example.QuickPick.services;

import com.example.QuickPick.model.PriceEntity;
import com.example.QuickPick.model.ProductEntity;
import com.example.QuickPick.repositories.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriceService {

    @Autowired
    private PriceRepository priceRepository;

    public List<PriceEntity> getPricesByProduct(ProductEntity productEntity) {
        return priceRepository.getPricesByProduct(productEntity);
    }
}
