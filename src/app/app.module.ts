import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './client/store/store.component';
import { LoginComponent } from './index/login/login.component';
import { ListProductsComponent } from './admon/list-products/list-products.component';
import { ProductComponent } from './admon/product/product.component';
import { ListCategoriesComponent } from './admon/list-categories/list-categories.component';
import { CategoryComponent } from './admon/category/category.component';

import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    LoginComponent,
    ListProductsComponent,
    ProductComponent,
    ListCategoriesComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
