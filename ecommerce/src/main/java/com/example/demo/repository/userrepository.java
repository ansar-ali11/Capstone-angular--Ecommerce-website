package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;


import com.example.demo.models.user;

public interface userrepository extends CrudRepository<user,Integer>{
	user getByEmail(String email);
}
