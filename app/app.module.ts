import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './com1/com1.component';
import { HeaderComponent } from './component/shared//header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { FilterComponent } from './component/shopping-cart/filter/filter.component';
import { ProductListComponent } from './component/shopping-cart/product-list/product-list.component';
import { CartComponent } from './component/shopping-cart/cart/cart.component';
import { CartItemComponent } from './component/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemsComponent } from './component/shopping-cart/product-list/product-items/product-items.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemsComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
HttpClientModule,
ReactiveFormsModule,
AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
