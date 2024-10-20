import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'cart', component: CartComponent }
    ])
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
