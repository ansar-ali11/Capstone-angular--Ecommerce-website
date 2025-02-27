package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.models.products;

public interface productrepository extends CrudRepository<products, Integer>{
//   products searchByName(String );
}
