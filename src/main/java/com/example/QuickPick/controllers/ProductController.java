package com.example.QuickPick.controllers;


import com.example.QuickPick.model.PriceEntity;
import com.example.QuickPick.model.ProductEntity;
import com.example.QuickPick.services.PriceService;
import com.example.QuickPick.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private PriceService priceService;

    @GetMapping("/category/{category}")
    public List<ProductEntity> getProductsByCategory(@PathVariable String category)
    {
        return productService.getProductByCategory(category);
    }

    @GetMapping("/search")
    public Map<String, Object> searchProduct(@RequestParam String entry)
    {
        Optional<ProductEntity> product=productService.searchProduct(entry);
        Map<String,Object> response=new HashMap<>();

        if(product.isPresent())
        {
            List<PriceEntity> prices=priceService.getPricesByProduct(product.get());
            if(!prices.isEmpty())
            {
                response.put("product",product.get());
                response.put("prices",prices);
            }
            else{
                response.put("message","Product Price not avalaible on any platform");
            }
        }else{
            response.put("message","Product Not Found");
        }
        return response;
    }
}
