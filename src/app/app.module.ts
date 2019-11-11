import { BasicAuthInterceptorService } from './Service/basic-auth-interceptor.service';
import { LogoutComponent } from './index/logout/logout.component';
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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    LoginComponent,
    ListProductsComponent,
    ProductComponent,
    ListCategoriesComponent,
    CategoryComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
