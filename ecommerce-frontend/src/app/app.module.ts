import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service'; // Corrected path to AuthService
import { ProductService } from './product/product.service'; // Corrected path to ProductService
import { CartService } from './cart/cart.service'; // Corrected path to CartService

import { UserModule } from './user/user.module'; // Importing UserModule
import { ProductModule } from './product/product.module'; // Importing ProductModule
import { CartModule } from './cart/cart.module'; // Importing CartModule

// Define application routes
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login on empty path
  { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, // Lazy loading UserModule
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }, // Lazy loading ProductModule
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) } // Lazy loading CartModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // Importing routes
    UserModule, // Include UserModule
    ProductModule, // Include ProductModule
    CartModule // Include CartModule
  ],
  providers: [
    AuthService,
    ProductService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
