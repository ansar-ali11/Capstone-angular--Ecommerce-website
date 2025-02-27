import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  records: Product[] = [];
  selectedProduct: Product | null = null;
  groupedProducts: { [category: string]: Product[] } = {};
  searchForm!: FormGroup;  
  searchResults: any[] = [];  
  searchTerm: string = '';

  constructor(private service: ProductsService, private cartService: CartService,private fb:FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['', [Validators.required]]  // Search field with required validator
    });
  }

  ngOnInit() {
    this.service.getall().subscribe(data => {
      this.records = data;
      this.groupProductsByCategory();
    });
  }

  // Group products by category
  groupProductsByCategory() {
    this.groupedProducts = {
      Electronics: this.records.filter(p => p.category === 'Electronics'),
      Clothing: this.records.filter(p => p.category === 'Clothing'),
      'Home & Kitchen': this.records.filter(p => p.category === 'Home & Kitchen'),
    };
  }

  // Open Product Details Modal
  openProductDetails(product: Product): void {
    if (!product) return;  // Ensures only valid products are assigned
    this.selectedProduct = product;

    const modalElement = document.getElementById('productModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Add product to cart
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }


  // onSubmit(): void {
  //   if (this.searchTerm) {
  //     this.service.getByName(this.searchTerm).subscribe(
  //       (results) => {
  //         this.searchResults = results;  // Update the search results with the response
  //       },
  //       (error) => {
  //         console.error('Error fetching search results', error);
  //       }
  //     );
  //   }
  // }
}
