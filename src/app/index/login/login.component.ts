import { AppComponent } from './../../app.component';
import { Authorities } from './../../model/Authorities';
import { AuthenticationService } from './../../Service/authentication.service';
import { Users } from './../../model/Users';
import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Users;
  invalidLogin: boolean;

  constructor(private service: ServiceService, private router: Router, private authenticationService: AuthenticationService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.invalidLogin = false;
    this.user = {
      id: null,
      image: '',
      name: '',
      lastName: '',
      email: '',
      user: '',
      category: null,
      password: '',
      authority: null
    };
  }

  login() {
    this.authenticationService.authenticate(this.user.user, this.user.password);
    this.appComponent.isLogged = true;
  }
}
