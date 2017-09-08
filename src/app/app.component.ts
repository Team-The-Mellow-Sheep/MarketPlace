// import { UserRoutersService } from './shared/services/user-routers.service';
import { AuthService } from './shared/services';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  private isAuthenticated: boolean;
  constructor(private authService: AuthService) {
    authService.authState.subscribe((state: AngularFireAuthModule) => {
      this.isAuthenticated = state !== null;
    });
  }
  onSignOutClick() {
    this.authService.signOut();
  }
}
