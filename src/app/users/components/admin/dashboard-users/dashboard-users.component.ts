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
  // tslint:disable-next-line:one-line
  constructor(private UserService: UserService, ){
  }
  ngOnInit() {
    this.users = this.UserService.getList();

  }

  private _buildForm() {
    this.formBuilder.group({
      admin: this.formBuilder.control(null)
    });
  }

}
