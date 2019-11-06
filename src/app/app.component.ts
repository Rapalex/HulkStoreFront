import { Users } from './model/Users';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HulkStore';
  userLogged: Users;

  constructor(private router: Router) {
    this.userLogged = JSON.parse(localStorage.getItem('currentUser'));
  }

  Store() {
    this.router.navigate(['store']);
  }

  Category() {
    this.router.navigate(['category']);
  }

  ListCategories() {
    this.router.navigate(['listCategories']);
  }

  Product() {
    this.router.navigate(['product']);
  }

  ListProducts() {
    this.router.navigate(['listProducts']);
  }

  Login() {
    this.router.navigate(['login']);
  }
}
