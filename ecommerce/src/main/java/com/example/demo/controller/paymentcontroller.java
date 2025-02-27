package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.payment;
import com.example.demo.services.paymentservices;

@Controller
@RestController
@RequestMapping("api/v3")
@CrossOrigin("http://localhost:4200")
public class paymentcontroller {

	@Autowired
	paymentservices service;
	
	@PostMapping("/insert")
	public payment addpayment(@RequestBody payment p) {
		return this.service.addpayment(p);
	}
}
