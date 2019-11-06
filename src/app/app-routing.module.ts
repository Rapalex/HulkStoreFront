import { ProductComponent } from './admon/product/product.component';
import { LoginComponent } from './index/login/login.component';
import { ListProductsComponent } from './admon/list-products/list-products.component';
import { ListCategoriesComponent } from './admon/list-categories/list-categories.component';
import { CategoryComponent } from './admon/category/category.component';
import { StoreComponent } from './client/store/store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'store', component : StoreComponent},
  {path : 'category', component : CategoryComponent},
  {path : 'listCategories', component : ListCategoriesComponent},
  {path : 'product', component : ProductComponent},
  {path : 'listProducts', component : ListProductsComponent},
  {path : 'login', component : LoginComponent},
  {path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
