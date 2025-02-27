package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.models.user;
import com.example.demo.services.userservice;

@Controller
@RestController
@RequestMapping("api/v1")
@CrossOrigin("http://localhost:4200")
class usercontroller {

	@Autowired
	userservice service;
	
	@PostMapping("/insert")
	public user adduser(@RequestBody user e) {
		return this.service.adduser(e);
	}
	
	@GetMapping("/getbyemail/{email}")
	 public ResponseEntity<user> getbyEmail(@PathVariable String email) {
	         user e = service.getbyEmail(email); // Call service layer

	        if (e != null) {
	            // Nullify password before sending response (for security)
	            return new ResponseEntity<>(e, HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // 404 if not found
	        }
	 }
}
