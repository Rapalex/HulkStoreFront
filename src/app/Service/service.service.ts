import { InventoryRestockses } from 'src/app/model/InventoryRestockses';
import { Users } from './../model/Users';
import { Messages } from './../model/Messages';
import { Products } from './../model/Products';
import { Categories } from './../model/Categories';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/';

  getCategories() {
    return this.http.get<Categories[]>(this.Url + 'categories/getAllCategories');
  }

  getAllProducts() {
    return this.http.get<Products[]>(this.Url + 'products/getAllProducts?store=true');
  }

  getAllProductsVendor() {
    return this.http.get<Products[]>(this.Url + 'products/getAllProducts?store=false');
  }

  buyProducts(products: Products[]) {
    return this.http.post<Messages>(this.Url + 'products/buyProducts', products);
  }

  saveProduct(product: Products) {
    return this.http.post<Messages>(this.Url + 'products/saveProduct', product);
  }

  saveRestock(inventoryRestockses: InventoryRestockses[], product: Products) {
    return this.http.post<Messages>(this.Url + 'products/saveRestock/' + product.id, inventoryRestockses);
  }

  saveCategories(categories: Categories[]) {
    return this.http.post<Messages>(this.Url + 'categories/saveCategories', categories);
  }

  login(user: Users) {
    return this.http.get<Users>(this.Url + 'login?user=' + user.user + '&password=' + user.password);
  }

  getProduct(id: number) {
    return this.http.get<Products>(this.Url + 'products/getProduct/' + id);
  }
}
