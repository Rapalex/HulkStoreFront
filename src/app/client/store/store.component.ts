import { Users } from './../../model/Users';
import { Messages } from './../../model/Messages';
import { Products } from './../../model/Products';
import { Categories } from './../../model/Categories';
import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  categories: Categories[];
  products: Products[];
  productsAdded: Products[];
  productsFiltered: Products[];
  productFilters: { name: '', category: 0 };
  totalPrice: number;
  totalQuantity: number;
  userLogged: Users;

  constructor(private service: ServiceService, private router: Router) { }

  addProductToBuy(id: number) {
    const productIsAdded = this.productsAdded.find(x => x.id === id);
    if (!productIsAdded) {
      let product: Products;
      product = this.products.find(x => x.id === id);

      product.quantity = 1;
      this.totalQuantity += product.quantity;
      this.productsAdded.push(product);
    }
    this.calculateTotals();
  }

  calculateTotals() {
    this.totalPrice = this.productsAdded.reduce((acc: number, product: Products) => acc + product.price * product.quantity, 0);
    this.totalQuantity = this.productsAdded.reduce((acc: number, product: Products) => acc + product.quantity, 0);
  }
  searchProducts() {
    this.productsFiltered = this.products;
    if (+this.productFilters.category !== 0) {
      this.productsFiltered = this.products.filter(x => x.category.id === +this.productFilters.category);
    }

    if (this.productFilters.name !== '') {
      this.productsFiltered = this.products.filter(x => x.name.toUpperCase().includes(this.productFilters.name.toUpperCase()) );
    }
  }

  removeProduct(id: number) {
    this.productsAdded = this.productsAdded.filter(x => x.id !== id);
    this.calculateTotals();
  }

  buyProducts() {
    this.service.buyProducts(this.productsAdded)
      .subscribe(data => {
        let message: Messages;
        message = data;
        alert(message.message);
        if (message.status === 'ok') {
          location.reload();
        }
      });
  }

  ngOnInit() {
    this.userLogged = JSON.parse(localStorage.getItem('currentUser'));
    this.productsAdded = [];
    this.productFilters = {name: '', category: 0};
    this.totalPrice = 0;
    this.totalQuantity = 0;

    this.service.getCategories()
      .subscribe(data => {
        this.categories = data;
      });

    this.service.getAllProducts()
      .subscribe(data => {
        this.products = data;
        this.productsFiltered = data;
      });
  }

}
