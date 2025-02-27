package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.models.admin;

public interface adminrepository extends CrudRepository<admin, Integer>{

	admin getByEmail(String email);

}
