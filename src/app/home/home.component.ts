import { HomeService } from './services/home.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homePhones: Observable<any[]>;
  constructor(private homeService: HomeService) {
    this.homePhones = this.homeService.getLatestThreeItems();
  }
}
