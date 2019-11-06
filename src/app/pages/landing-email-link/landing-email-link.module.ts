import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingEmailLinkPage } from './landing-email-link.page';

const routes: Routes = [
  {
    path: '',
    component: LandingEmailLinkPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingEmailLinkPage]
})
export class LandingEmailLinkPageModule {}
