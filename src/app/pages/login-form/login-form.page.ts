import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  public email: string;

  constructor(
    public authService: AuthService,
    private storage: Storage,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  sendSignInLinkToEmail(email) {
    this.authService.sendSignInLinkToEmail(email)
  .then( _ => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    this.presentAlert('Authentication', 'A link was sent to your email, open it on this device and click on link to complete Sign-in');
    this.storage.set('emailForSignIn', email);
  })
  .catch((error) => {
    // Some error occurred, you can inspect the code: error.code
  });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
