import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadComponent: ()=> import('./layout/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
  children:[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', loadComponent: ()=>import('./components/login/login.component').then((m)=> m.LoginComponent), title: 'Login'},
    {path:'register', loadComponent: ()=>import('./components/register/register.component').then((m)=> m.RegisterComponent), title: 'Register'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
