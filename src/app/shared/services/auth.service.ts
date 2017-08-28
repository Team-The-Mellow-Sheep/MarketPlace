import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  uid;
  user: Observable<firebase.User>;
  // state = firebase.auth().currentUser;
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  // for app.component
  get authState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }
  /*   get userId(): string {
      const userId = localStorage.getItem('loggedUserId');
      return userId !== null ? userId : '';
    } */

  register(username: string, email: string, password: string) {
    return this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((state: AngularFireAuth) => this.setUserId(state))
      .catch(err => {
        return err;
      });
  }

  signIn(email: string, password: string) {
    return this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((state: AngularFireAuth) => this.setUserId(state))
      .catch(err => {
        return err;
      });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    localStorage.removeItem('loggedUserId');
    this.uid.unsubscribe();
  }
  private setUserId(state): void {
    this.uid = this.afAuth.authState.subscribe(user => user.uid);
    localStorage.setItem('loggedUserId', state.uid);
  }
}
