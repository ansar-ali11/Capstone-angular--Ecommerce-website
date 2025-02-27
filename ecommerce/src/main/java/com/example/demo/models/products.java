package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class products {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
private String productname;
private String productdescription;
private int productstock;
private int price;
private String src;
private String category;
}
