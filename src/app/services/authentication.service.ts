import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFireAtuh: AngularFireAuth) {
  }
  loginWithEmail(email: string, password: string) {
    return this.angularFireAtuh.auth.signInWithEmailAndPassword(email, password);
  }

  registerWithEmail(email: string, password: string) {
    return this.angularFireAtuh.auth.createUserWithEmailAndPassword(email, password);
  }
  getStatus() {
    return this.angularFireAtuh.authState;
  }
  logOut() {
    return this.angularFireAtuh.auth.signOut();
  }
}
