import { environment } from './../environments/environment';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user-model';
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

  private user;
  username;

  constructor(private authService: AuthService) {
    authService.authState.subscribe((state: AngularFireAuthModule) => {
      this.isAuthenticated = state !== null;
    });
    // this.username = firebase.auth().currentUser;
    this.user = authService.user.subscribe(x => x);
    console.log(this.user);
  }
  onSignOutClick() {
    this.authService.signOut();
  }

}
