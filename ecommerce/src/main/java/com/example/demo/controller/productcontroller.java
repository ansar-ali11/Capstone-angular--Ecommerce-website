package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.products;
import com.example.demo.services.productservices;

@Controller
@RestController
@RequestMapping("api/p1")
@CrossOrigin("http://localhost:4200")
public class productcontroller {

	@Autowired
	productservices service;
	
	@PostMapping("/insert2")
	public products add(@RequestBody products p) {
		return this.service.add(p);
	}
	
	@DeleteMapping("delete/{id}")
	public String delete(@PathVariable int id) {
		return this.service.delete(id);
	}
	
	@GetMapping("/getall")
	public List<products> getall(){
		return this.service.getall();
	}
	
	@GetMapping("/search")
	public List<products> searchByName(@PathVariable String productname) {
	    return service.searchbyname(productname);
	}

	
	
	
}
