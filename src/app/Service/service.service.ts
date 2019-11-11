import { InventoryRestockses } from 'src/app/model/InventoryRestockses';
import { Users } from './../model/Users';
import { Messages } from './../model/Messages';
import { Products } from './../model/Products';
import { Categories } from './../model/Categories';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/';

  getCategories() {
    return this.http.get<Categories[]>(this.Url + 'categories/getAllCategories?token=' + sessionStorage.getItem('token'));
  }

  getAllProducts() {
    return this.http.get<Products[]>(this.Url + 'products/getAllProducts?store=true&token=' + sessionStorage.getItem('token'));
  }

  getAllProductsVendor() {
    return this.http.get<Products[]>(this.Url + 'products/getAllProducts?store=false&token=' + sessionStorage.getItem('token'));
  }

  buyProducts(products: Products[]) {
    return this.http.post<Messages>(this.Url + 'products/buyProducts?token=' + sessionStorage.getItem('token'), products);
  }

  saveProduct(product: Products) {
    return this.http.post<Messages>(this.Url + 'products/saveProduct?token=' + sessionStorage.getItem('token'), product);
  }

  saveRestock(inventoryRestockses: InventoryRestockses[], product: Products) {
    return this.http.post<Messages>(this.Url + 'products/saveRestock/' + product.id + '?token=' + sessionStorage.getItem('token')
    , inventoryRestockses);
  }

  saveCategories(categories: Categories[]) {
    return this.http.post<Messages>(this.Url + 'categories/saveCategories?token=' + sessionStorage.getItem('token'), categories);
  }

  getProduct(id: number) {
    return this.http.get<Products>(this.Url + 'products/getProduct/' + id + '?token=' + sessionStorage.getItem('token'));
  }

}
