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

  constructor(private service: ServiceService, private router: Router) { }


  // Simulación de un login sin seguridad, solo para efectos de vista, 
  // más no tiene funciones de seguridad
  login() {
    this.service.login(this.user)
      .subscribe(data => {
        if (data != null) {
          this.user = data;
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          alert('Bienvenido/a ' + this.user.name + ' ' + this.user.lastName);
          if (this.user.category === 1) {
            this.router.navigate(['listProducts']);
          } else {
            this.router.navigate(['store']);
          }
        } else {
          alert('Usuario o contraseña incorrecto');
        }
      }, err => {
        alert(err.message);
      });
  }

  ngOnInit() {
    this.user = {id: null,
      image: '',
      name: '',
      lastName: '',
      email: '',
      user: '',
      category: null,
      password: '',
    };
  }

}
