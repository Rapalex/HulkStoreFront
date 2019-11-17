import { Messages } from './../../model/Messages';
import { Users } from './../../model/Users';
import { Products } from './../../model/Products';
import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Products[];
  userLogged: Users;

  constructor(private service: ServiceService, private router: Router) { }

  editProduct(id: number) {
    localStorage.setItem( 'itemId', id + '');
    this.router.navigate(['product']);
  }

  newProduct() {
    localStorage.removeItem( 'itemId');
    this.router.navigate(['product']);
  }

  goCategories() {
    this.router.navigate(['listCategories']);
  }

  ngOnInit() {
    this.userLogged = JSON.parse(sessionStorage.getItem('currentUser'));
    this.service.getAllProductsVendor()
      .subscribe(data => {
        this.products = data;
      }, err => {
        alert(err.error.message);
      });
  }

}
