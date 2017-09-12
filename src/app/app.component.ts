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
  private isAdmin: boolean;

  private userId;
  private user;
  private dbUser;
  username;

  constructor(private authService: AuthService, private userService: UserService) {
    authService.authState.subscribe((state: AngularFireAuthModule) => {
      this.isAuthenticated = state !== null;
    });
    // this.username = firebase.auth().currentUser;
    this.user = authService.user.subscribe(x => x);
    this.userId = localStorage.getItem('loggedUserId');
    this.dbUser = userService.getUser(this.userId).subscribe(u => {
      this.isAdmin = u[0].isAdmin;
      console.log('uuuuuuu');
      console.log(u);
    });
    console.log(this.user);
  }
  onSignOutClick() {
    this.authService.signOut();
  }

}
