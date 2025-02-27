package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.payment;
import com.example.demo.repository.paymentrepository;

@Service
public class paymentservices {
@Autowired
paymentrepository repo;

public payment addpayment(payment p) {
	return this.repo.save(p);
}
}
