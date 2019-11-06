import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthorizationCheckPage } from './authorization-check.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationCheckPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthorizationCheckPage]
})
export class AuthorizationCheckPageModule {}
