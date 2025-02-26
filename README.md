# Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Project Overview:

This project is build using Angular , RestApi , springboot  and mysql.


User intreface:

frontend:
welcome page -> contains categoriezed products like electronics , clothing  and home appliances.

login and registration pages -> for user authentication

cart page -> for the list of products added to the cart 

payment page -> for secure payment of the user.

backend(springboot):

1.create a spring starter project 

2.Add the required dependencies i used lambok , jpa , spring devtools , mysqldriver  etc.

3.src/main/java - > there is a application package like com.example.demo using the same package name create four packages like -> models , repository , service and 
   controller.

4.In the package models create the class(table) for the required once like -> admin, use, payment and products.

admin code:
package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class admin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
	@Email
private String email;
private String password;
}


user code : 
package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class user {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
private String name;
@Email
private String email;
private String password;

}

products code:

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

payment code:

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
public class payment {
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Long id;
	    private String cardNumber;
	    private String expiryDate;
	    private String cvv;
	    private double amount;
}


5.In the package repository create a interface for respective tables by extending to crudrepository or jparepository.

6.In the package service create a class respective service name  for the tables and write the medthods like add,update,delete and getall etc.

7.In the package controller create a class controller with respective models and add the extentions like cross origin , requestmapping , restcontroller etc and add mapping to the methods like getmapping() , postmapping() , putmapping() and deletemapping().

Database :

tables:
products table

login table

register table

payment table 
