import { Router } from '@angular/router';
import { Categories } from './../model/Categories';
import { Users } from './../model/Users';
import { Injectable, Optional } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  authenticate(username: string, password: string) {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    this.authenticateService(username, password)
      .subscribe(data => {
        const userLog: Users = data.user;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('currentUser', data.user);
        const tokenStr = 'Bearer ' + data.token;
        sessionStorage.setItem('token', tokenStr);
        const authority = userLog.authority.filter(x => x.authority === 'ROLE_ADMIN');
        if (authority.length >= 1) {
          this.router.navigate(['listProducts']);
        } else {
          this.router.navigate(['store']);
        }
      }, err => {
        alert(err);
      });
  }

  authenticateService(username: string, password: string) {
    return this.httpClient.post<any>('http://localhost:8080/authenticate', { username, password });
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
  }
}
