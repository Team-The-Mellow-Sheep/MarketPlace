import { SmartPhone } from './../../../../shared/models/smartphone-model';
import { User } from './../../../../shared/models/user-model';
import { ProductsListService } from './../../../../products-list/services/products-list.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup } from "@angular/forms/src/forms";

@Component({
  selector: 'app-dashboard-smartphones',
  templateUrl: './dashboard-smartphones.component.html',
  styleUrls: ['./dashboard-smartphones.component.css']
})
export class DashboardSmartphonesComponent implements OnInit {

  signUpForm: FormGroup;
  smartPhone: SmartPhone;

  smartPhones;

  constructor(private productsListService: ProductsListService, ) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(numberProduct) {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.smartPhones = this.productsListService.getPhones();
    }
  }
  ngOnInit() {
    this.smartPhones = this.productsListService.getPhones();

  }

  onSignUpFormSubmit() {
    const formControls = this.signUpForm.controls;
    this.smartPhone = new SmartPhone(
      formControls['model'].value,
      formControls['display'].value,
      formControls['cpu'].value,
      formControls['model'].value,
      formControls['model'].value,
      formControls['model'].value,
      formControls['price'].value,
    );
  }


}
