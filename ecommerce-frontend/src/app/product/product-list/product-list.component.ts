import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  category: string;
  stockQuantity: number;
  releaseDate: Date;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor() {
    // Sample product data (replace this with a service call to fetch products from your backend)
    this.products = [
      {
        id: 1,
        name: 'Laptop',
        brand: 'Brand A',
        description: 'High performance laptop.',
        price: 999.99,
        category: 'laptop',
        stockQuantity: 10,
        releaseDate: new Date('2023-01-01'),
        imageUrl: 'assets/images/laptop.jpg'
      },
      {
        id: 2,
        name: 'Headphones',
        brand: 'Brand B',
        description: 'Noise-cancelling headphones.',
        price: 199.99,
        category: 'headphones',
        stockQuantity: 20,
        releaseDate: new Date('2023-02-01'),
        imageUrl: 'assets/images/headphones.jpg'
      }
      // Add more products as needed
    ];
  }

  ngOnInit(): void {
    // Fetch product data from a service here (if needed)
  }

  // Optional: Method to handle product selection or other actions
  selectProduct(product: Product) {
    console.log('Selected product:', product);
    // Implement logic to navigate to product details or perform other actions
  }
}
