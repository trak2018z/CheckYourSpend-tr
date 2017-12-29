import { AuthGuard } from './../security/auth.guard';
import { NgModule } from '@angular/core';
import { HomeComponent } from './../../components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { SpendManagerComponent } from '../../components/spend-manager/spend-manager.component';

const ROUTES: Routes = [
  { path: '', component: LoginComponent, resolve: [AuthGuard] },
  { path: 'signup', component: SignupComponent, resolve: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'spends-manager',
    component: SpendManagerComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false })],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
