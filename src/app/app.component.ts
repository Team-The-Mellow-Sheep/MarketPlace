import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/services';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
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
