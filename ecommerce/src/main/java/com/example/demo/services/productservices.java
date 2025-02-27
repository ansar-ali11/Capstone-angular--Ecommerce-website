package com.example.demo.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.products;
import com.example.demo.repository.productrepository;

@Service
public class productservices {
@Autowired
productrepository repo;

public products add(products p) {
	return this.repo.save(p);
}

public String delete(int id) {
	this.repo.deleteById(id);
	return "deleted successfully :" + id;
}

public List<products> getall(){
	return (List<products>) this.repo.findAll();
}


// Search products by name
public List<products> searchbyname(String productname) {
    // Get all products from the repository
    List<products> allProducts = (List<products>) repo.findAll();

    // Filter products by name (case insensitive search)
    return allProducts.stream()
            .filter(p -> p.getProductname().toLowerCase().contains(productname.toLowerCase()))
            .collect(Collectors.toList());
}


}
