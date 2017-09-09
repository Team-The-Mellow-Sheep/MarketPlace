import { Component, OnInit } from '@angular/core';
// import { AppModule } from '../../../app.module';
import { ProductsListService } from '../../../products-list/services/products-list.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


// let db = AppModule;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  smartPhones = new BehaviorSubject([]);
  
    constructor(
      private productsListService: ProductsListService,
    ) {
      // this.smartPhones = this.productsListService.getSmarthphones();
      const asd = this.productsListService.getListProductByCamera('', '12 MP');
      // console.log(asd)
    }
  ngOnInit() {
    this.smartPhones = this.productsListService.getSmarthphones();
  }

}
