import { UserService } from './../../../../shared/services/user.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { AdminComponent } from '../admin.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsListService } from '../../../../products-list/services/products-list.service';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.css']
})
export class DashboardUsersComponent implements OnInit {
  users;

  // tslint:disable-next-line:one-line
  constructor(private UserService: UserService, ){
  }
  ngOnInit() {
    this.users = this.UserService.getList();

  }

}
