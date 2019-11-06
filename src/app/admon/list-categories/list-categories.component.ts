import { Messages } from './../../model/Messages';
import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Categories } from './../../model/Categories';
import { Users } from './../../model/Users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  userLogged: Users;
  categories: Categories[];

  constructor(private service: ServiceService, private router: Router) { }

  editCategory(category: Categories) {
    category.edit = true;
  }

  goProducts() {
    this.router.navigate(['listProducts']);
  }

  newCategory() {
    this.categories.push({id: null, name: '', edit: true, description: '', products: null});
  }

  saveCategories() {
    this.service.saveCategories(this.categories)
    .subscribe(data => {
      let message: Messages;
      message = data;
      alert(message.message);
      if (message.status === 'ok') {
        location.reload();
      }
    }, err =>{
      alert(err);
    });
  }

  ngOnInit() {
    this.userLogged = JSON.parse(localStorage.getItem('currentUser'));
    this.service.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }

}
