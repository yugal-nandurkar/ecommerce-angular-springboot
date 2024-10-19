import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'add-product', component: AddProductComponent },
      { path: 'products', component: ProductListComponent }
    ])
  ],
  exports: [
    AddProductComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
