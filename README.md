
# Rupto E-Commerce Application

## Overview

This project is a web-based **E-Commerce** application built using **Angular** for the frontend, **Spring Boot** for the backend, **REST APIs** for communication, and **MySQL** for data storage. The application allows users to browse and purchase products in categories like electronics, clothing, and home appliances. It features user authentication, a shopping cart, and a secure payment system, providing a complete online shopping experience.

## Features

- **Categorized Products**: Products are organized into categories such as electronics, clothing, and home appliances.
- **User Authentication**: Users can log in or register for personalized access to the site.
- **Shopping Cart**: Users can add products to the cart and view the list of selected items.
- **Secure Payment**: A payment page to handle user transactions in a secure manner.
- **RESTful API Integration**: The frontend communicates with the backend using REST APIs for various operations.

## Technologies Used

- **Frontend**: 
  - **Angular**: For building the dynamic user interface (UI).
  - **HTML, CSS, and JavaScript**: For basic frontend design and functionality.
  
- **Backend**: 
  - **Spring Boot**: For developing the REST API and handling server-side logic.
  - **Lombok**: For reducing boilerplate code.
  - **Spring Data JPA**: For database interactions.
  - **Spring DevTools**: For automatic reloading during development.
  
- **Database**: 
  - **MySQL**: For storing product, user, and payment information.

## Project Structure

### 1. **Frontend (Angular)**
   - **Welcome Page**: Displays categorized products such as electronics, clothing, and home appliances.
   - **Login & Registration Pages**: Provides authentication functionality where users can register and log in.
   - **Cart Page**: Displays a list of products that users add to their cart.
   - **Payment Page**: Secure page for users to make payments for the products they wish to purchase.

### 2. **Backend (Spring Boot)**
   - **Spring Starter Project**: A new Spring Boot application created for building the backend of the e-commerce system.
   - **Dependencies**: 
     - **Lombok** for reducing boilerplate code (e.g., getters/setters).
     - **Spring Data JPA** for managing the database.
     - **MySQL Driver** for database connectivity.
     - **Spring DevTools** for development convenience.
   
### 3. **Backend Structure** (`src/main/java`)
   - The backend follows a clean architecture with four main packages:
     - **Models**: Contains Java classes that represent the database tables (e.g., Admin, User, Payment, Product).
     - **Repository**: Interfaces that interact with the database using JPA (`CrudRepository` or `JpaRepository`).
     - **Service**: Contains the business logic for each model (e.g., adding, updating, deleting, fetching data).
     - **Controller**: Handles incoming HTTP requests, implements the REST API using `@RestController`, and maps routes to service methods.

### 4. **Database Design (MySQL)**

   - **Tables**:
     - **Products Table**: Stores product details (e.g., name, description, price, category).
     - **Login Table**: Stores user login credentials (e.g., username, password).
     - **Register Table**: Stores user registration details (e.g., name, email, address).
     - **Payment Table**: Stores payment transaction details (e.g., payment method, payment status, amount).

## Step-by-Step Overview of the Project

### 1. **Frontend (Angular)**
   - **Welcome Page**:
     - Displays a list of products categorized into sections such as Electronics, Clothing, and Home Appliances.
     - Users can click on product categories to view available products.
   
   - **Login and Registration Pages**:
     - **Login Page**: Users enter their credentials to log in.
     - **Registration Page**: New users can register by entering their personal details.
   
   - **Cart Page**:
     - Displays products that the user has added to their shopping cart.
     - Users can update quantities or remove items from the cart.
   
   - **Payment Page**:
     - A secure page where users can enter payment details (e.g., credit card information) and complete their purchase.

### 2. **Backend (Spring Boot)**
   - **Creating the Spring Boot Project**:
     - A Spring Boot starter project is created with required dependencies like **Lombok**, **JPA**, and **MySQL Driver**.
   
   - **Backend Packages**:
     - **Models Package**:
       - Classes for each database table, including `Admin`, `User`, `Payment`, and `Product`.
       - These classes are annotated with JPA annotations (`@Entity`, `@Table`, etc.) to map to corresponding database tables.
   
     - **Repository Package**:
       - Interfaces that extend **CrudRepository** or **JpaRepository** to perform CRUD operations on the database (e.g., `ProductRepository`, `UserRepository`).
   
     - **Service Package**:
       - Classes containing the business logic for each model (e.g., `ProductService`, `UserService`).
       - Methods for performing actions such as adding, updating, deleting, and retrieving data.
   
     - **Controller Package**:
       - REST API controllers (e.g., `ProductController`, `UserController`) to handle HTTP requests.
       - Each controller uses mappings like `@GetMapping`, `@PostMapping`, `@PutMapping`, and `@DeleteMapping` to perform CRUD operations on the database.

### 3. **Database (MySQL)**:
   - **Tables**:
     - **Products Table**: Stores information about products available for sale (name, category, price, description).
     - **Login Table**: Contains user login credentials for authentication.
     - **Register Table**: Stores user information (name, email, contact details).
     - **Payment Table**: Stores payment transaction details for completed purchases.
   
   - **Database Integration**:
     - The backend uses **Spring Data JPA** to interact with the MySQL database, automatically mapping entities to tables.

## How to Use

1. **Clone this repository** to your local machine.
2. **Set up MySQL Database**:
   - Create a MySQL database and import the schema (`ecommerce.sql`).
3. **Configure Backend**:
   - Update database connection settings in the `application.properties` file (username, password, and database URL).
4. **Run the Backend**:
   - Use Spring Boot to run the backend (e.g., using `mvn spring-boot:run` or through your IDE).
5. **Run the Frontend**:
   - Install the required dependencies for the Angular app (`npm install`).
   - Run the Angular app with `ng serve` to start the frontend.

6. **Access the Application**:
   - Visit the homepage of the app and start browsing products, logging in, adding items to the cart, and making payments.

## Future Enhancements

- **User Roles**: Add different user roles (e.g., Admin, Customer) with separate functionalities and views.
- **Order History**: Implement order history for users to view previous purchases.
- **Search Functionality**: Add a search bar to allow users to search for products by name or category.
- **Product Reviews**: Allow users to leave reviews and ratings for products.

## Conclusion

This E-Commerce application demonstrates a fully integrated system for online shopping with product browsing, user authentication, shopping cart functionality, and secure payment handling. The project uses modern technologies such as Angular, Spring Boot, and MySQL to create a scalable and robust platform. Feel free to contribute to this project!

