import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.router.navigate(['visitors']);
      })
      .catch(error => {
        window.alert(error.message);
        this.router.navigate(['log-in']);
      });
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
  // Sign out implementation
  signOut() {
    this.router.navigate(['log-in']).then(() => {
    firebase.database().goOffline();
    this.afAuth.auth.signOut();
  });
}
}
