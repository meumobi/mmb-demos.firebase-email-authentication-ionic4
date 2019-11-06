import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login-form', loadChildren: './pages/login-form/login-form.module#LoginFormPageModule' },
  { path: 'landing-email-link', loadChildren: './pages/landing-email-link/landing-email-link.module#LandingEmailLinkPageModule' },
  { path: 'authorization-check', loadChildren: './pages/authorization-check/authorization-check.module#AuthorizationCheckPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
