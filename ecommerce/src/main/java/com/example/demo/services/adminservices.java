package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.admin;
import com.example.demo.repository.adminrepository;

@Service
public class adminservices {
	
	@Autowired
	adminrepository repo;
	
	public admin addadmin(admin m) {
		return this.repo.save(m);
	}
	
	public String deleteadmin(int id) {
		this.repo.deleteById(id);
		return "deleted successfully :" + id;
	}
	
	public admin getbyEmail(String email) {
		return this.repo.getByEmail(email);
	}
}
