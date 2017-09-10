import { Component, OnInit, Input } from '@angular/core';
import { AddToCartService } from './../../shared/services/add-to-cart.service';
import { AuthService } from './../../shared/services/auth.service';
import { Product } from './../../shared/models/product';
import { SaleItem } from './../../shared/models/sale-item';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-add-to-shopping-cart-form',
  templateUrl: './add-to-shopping-cart-form.component.html',
  styleUrls: ['./add-to-shopping-cart-form.component.css'],
  providers: [AuthService, AddToCartService, FormGroup],
})
export class AddToShoppingCartFormComponent implements OnInit {

  @Input() product: Product;
  addToCartForm: FormGroup;
  authError: string;
  userId: string;
  authenticated: boolean;
  saleItem: SaleItem;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private addToCartService: AddToCartService,
  ) {
    this.authService.authState.subscribe(user => {
      this.authenticated = !!user;
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  ngOnInit() {
    this.addToCartForm = this.formBuilder.group({
      quantity: ['', [Validators.min(-1)]],
    });
  }

  onAddtoCart() {

  }

}
