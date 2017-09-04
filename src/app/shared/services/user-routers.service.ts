import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class UserRoutersService {

  urls = [];
  constructor(private router: Router) {
    router.events
      .forEach((event) => {
        if (event instanceof NavigationEnd) {
          return this.urls.push(event.url);
        }
      });
  }
}
