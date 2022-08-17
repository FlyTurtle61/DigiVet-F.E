import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isJSDocAuthorTag } from 'typescript';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomePageForUserComponent } from './components/home-page-for-user/home-page-for-user.component';
import { LoginForUserComponent } from './components/login-for-user/login-for-user.component';
import { LoginForVetComponent } from './components/login-for-vet/login-for-vet.component';
import { SorguComponent } from './components/sorgu/sorgu.component';

const routes: Routes = [

  {path:'login-for-user',component: LoginForUserComponent},
  {path:'login-for-vet',component: LoginForVetComponent},
  {path:'sorgu',component : SorguComponent},
  {path:'user-home-page',component : HomePageForUserComponent},

  {
    path: 'vet-home-page',
    loadChildren: () =>
    import('./components/home-page-for-vet/vet-routing.module').then((m) => m.VetRoutingModule)
    },
    {
      path: 'user-home-page',
      loadChildren: () =>
      import('./components/home-page-for-user/user-routing.module').then((m) => m.UserRoutingModule)
      },
      {path:'admin',component: AdminLoginComponent},
      {
        path: 'admin-dashboard',
        loadChildren: () =>
        import('./components/admin-dashboard/app-routing.module').then((m) => m.AppRoutingModule)
        },
      {path:'',redirectTo:"/sorgu",pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
