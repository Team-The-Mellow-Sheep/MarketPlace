// import { FormBuilder } from '@angular/forms/src/form_builder';
import { SmartPhone } from './../../../../shared/models/smartphone-model';
import { User } from './../../../../shared/models/user-model';
import { ProductsListService } from './../../../../products-list/services/products-list.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-dashboard-smartphones',
  templateUrl: './dashboard-smartphones.component.html',
  styleUrls: ['./dashboard-smartphones.component.css'],
  providers: [ProductsListService]
})
export class DashboardSmartphonesComponent implements OnInit {

  signUpForm: FormGroup;
  smartPhone: SmartPhone;

  smartPhones;

  constructor(private productsListService: ProductsListService, private formBuilder: FormBuilder, ) {
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(numberProduct) {

  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     this.smartPhones = this.productsListService.getPhones();
  //   }
  // }
  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      camera: [''],
      display: [''],
      battery: [''],
      cpu: [''],
      memory: [''],
      price: ['', [Validators.required]],
    });
    this.smartPhones = this.productsListService.getPhones();
  }

  onAddSmartPhone() {
    const formControls = this.signUpForm.controls;
    // this.signUpForm = new FormGroup({});
    this.smartPhone = new SmartPhone(
      formControls['title'].value,
      formControls['display'].value,
      formControls['cpu'].value,
      formControls['camera'].value,
      formControls['cpu'].value,
      formControls['memory'].value,
      formControls['price'].value
    );
    this.productsListService.create(this.smartPhone);
  }


}
