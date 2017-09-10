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
  smartPhones = new BehaviorSubject([]);

  constructor(private productsListService: ProductsListService,) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(numberProduct) {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.smartPhones = this.productsListService.getSmarthphones();
    }
  }
  ngOnInit() {
    this.smartPhones = this.productsListService.getSmarthphones();
    
  }

  onScroll() {
    this.smartPhones = this.productsListService.getSmarthphones();
  }

}
