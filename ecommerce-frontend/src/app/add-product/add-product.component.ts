import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product = {
    id: '',
    name: '',
    brand: '',
    description: '',
    price: 0,
    category: '',
    stock: 0,
    releaseDate: '',
    image: null,
    isAvailable: false
  };

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.product.image = file;
    }
  }

  onSubmit() {
    console.log('Product Details:', this.product);
    // Here, you can implement the logic to send the product data to the server
  }
}
