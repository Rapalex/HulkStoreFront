import { Categories } from './../../model/Categories';
import { Messages } from './../../model/Messages';
import { Products } from './../../model/Products';
import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';
import { Users } from './../../model/Users';
import { Component, OnInit } from '@angular/core';
import { InventoryRestockses } from 'src/app/model/InventoryRestockses';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  userLogged: Users;
  headText: string;
  idProduct: string;
  product: Products;
  categories: Categories[];
  categorySelected: string;
  saved: boolean;
  restockesAdded: InventoryRestockses[];

  constructor(private service: ServiceService, private router: Router) { }

  getProduct() {
    this.service.getProduct(+this.idProduct)
      .subscribe(data => {
        this.product = data;
        this.headText = 'Edit - ' + this.product.name;
      });
  }

  newRestock() {
    const prod = Object.assign({}, this.product);
    prod.inventoryRestockses = [];
    this.product.inventoryRestockses.push({id: null, quantity: 1, restockDate: new Date()});
  }

  saveProduct() {
    this.service.saveProduct(this.product)
    .subscribe(data => {
      let message: Messages;
      message = data;
      alert(message.message);
      if (message.status === 'ok') {
        this.router.navigate(['listProducts']);
      }
    }, err =>{
      alert(err);
    });
  }

  saveRestocks() {
    this.restockesAdded = this.product.inventoryRestockses
                              .filter(x => x.id == null && x.quantity > 0);
    if (this.restockesAdded.length <= 0) {
      alert('Debe agregar almenos una cantidad del producto');
      return;
    }
    this.service.saveRestock(this.restockesAdded, this.product)
    .subscribe(data => {
      let message: Messages;
      message = data;
      alert(message.message);
      if (message.status === 'ok') {
        this.router.navigate(['listProducts']);
      }
    }, err =>{
      alert(err);
    });
  }

  ngOnInit() {
    this.restockesAdded = [new InventoryRestockses()];
    this.categorySelected = '';
    this.product = new Products();
    this.product.category = new Categories();
    this.userLogged = JSON.parse(localStorage.getItem('currentUser'));
    this.idProduct = localStorage.getItem('itemId');
    if (this.idProduct) {
      this.saved = true;
      this.getProduct();
    } else {
      this.saved = false;
      this.headText = 'Nuevo Producto';
    }
    this.service.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }

}
