import { AuthGaurdService } from './Service/auth-gaurd.service';
import { LogoutComponent } from './index/logout/logout.component';
import { ProductComponent } from './admon/product/product.component';
import { LoginComponent } from './index/login/login.component';
import { ListProductsComponent } from './admon/list-products/list-products.component';
import { ListCategoriesComponent } from './admon/list-categories/list-categories.component';
import { CategoryComponent } from './admon/category/category.component';
import { StoreComponent } from './client/store/store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'store', component : StoreComponent, canActivate: [AuthGaurdService] },
  {path : 'category', component : CategoryComponent, canActivate: [AuthGaurdService] },
  {path : 'listCategories', component : ListCategoriesComponent, canActivate: [AuthGaurdService] },
  {path : 'product', component : ProductComponent, canActivate: [AuthGaurdService]},
  {path : 'listProducts', component : ListProductsComponent, canActivate: [AuthGaurdService]},
  {path : 'login', component : LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
