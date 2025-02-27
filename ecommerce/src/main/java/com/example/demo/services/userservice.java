package com.example.demo.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.user;
import com.example.demo.repository.userrepository;

@Service
public class userservice {
@Autowired
userrepository repo;

public user adduser(user e) {
	return this.repo.save(e);
}

public String deleteuser(int id) {
	this.repo.deleteById(id);
	return "deleted successfully :" + id;
}

public user getbyEmail(String email) {
	return this.repo.getByEmail(email);
}

}
