import { User } from './../../../../shared/models/user-model';
import { element } from 'protractor';
import { UserService } from './../../../../shared/services/user.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { AdminComponent } from '../admin.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsListService } from '../../../../products-list/services/products-list.service';
import { FormBuilder } from '@angular/forms/src/form_builder';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {
  users;
  formBuilder: FormBuilder;
  user: User;
  x;
  constructor(private UserService: UserService, ) {
  }
  ngOnInit() {
    this.users = this.UserService.getList();

  }

  private _buildForm() {
    this.formBuilder.group({
      admin: this.formBuilder.control(null)
    });
  }

  private onChange(element) {

    if (element.checked) {
      console.log(true);
      console.log(element.name);
        // this.UserService.get(element.name).subscribe(u => u.isAdmin = true);
        // this.UserService.updateById(element.name, User);
      //  this.x = this.UserService.getList();
      //  this.x.forEach(el => {
      //    console.log(el[5]['isAdmin']);
      //  });
    } else {
      console.log(false);
      console.log(element.name);
      // this.UserService.get(element.name).subscribe(u => u.isAdmin = false);
      // this.UserService.update(this.UserService.get('users').subscribe(u => u.isAdmin = false), { isAdmin: true });
    }
  }
}
