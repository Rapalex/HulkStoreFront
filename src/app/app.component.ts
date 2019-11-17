import { AuthenticationService } from './Service/authentication.service';
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
  isLogged: boolean;

  constructor(private router: Router, public loginService: AuthenticationService) {
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

  Logout() {
    this.isLogged = false;
    this.router.navigate(['logout']);
  }
}
