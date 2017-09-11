/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddToCartService } from './add-to-cart.service';

describe('Service: AddToCart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToCartService]
    });
  });

  it('should ...', inject([AddToCartService], (service: AddToCartService) => {
    expect(service).toBeTruthy();
  }));
});