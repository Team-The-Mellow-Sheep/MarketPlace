import { ProductsListService } from './../../../../products-list/services/products-list.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard-smartphones',
  templateUrl: './dashboard-smartphones.component.html',
  styleUrls: ['./dashboard-smartphones.component.css']
})
export class DashboardSmartphonesComponent implements OnInit {

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
