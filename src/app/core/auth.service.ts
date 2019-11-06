import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../shared/user.model';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );

    this.afAuth.auth.useDeviceLanguage();
    console.log('Language code: ', this.afAuth.auth.languageCode);
  }

  public sendSignInLinkToEmail(email: string): Promise<void> {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: `${environment.domain}/landing-email-link`,
      // This must be true.
      handleCodeInApp: true
    };
    return this.afAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings);
  }

  public signInWithEmailLink(email, url) {
    return this.afAuth.auth.signInWithEmailLink(email, url);
  }

  public getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

  public getIdTokenResult() {
    return this.afAuth.auth.currentUser.getIdTokenResult(true);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }
}
