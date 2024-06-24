import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadComponent: () => import('./layout/blank-layout/blank-layout.component').then((m)=> m.BlankLayoutComponent),
    children:[
      {path:'' , redirectTo: 'home', pathMatch:'full'},
      {path:'home' , loadComponent: () => import('./components/home/home.component').then((m)=> m.HomeComponent), title:'Home'},
      {path:'emergency', loadComponent: () => import('./components/emergency/emergency.component').then((m)=> m.EmergencyComponent), title:'Emergency'},
      {path:'emergencydetails/:id', loadComponent: () => import('./components/details/emergency-details/emergency-details.component').then((m)=> m.EmergencyDetailsComponent), title:'Emergency Details'},
      {path:'emergency-details/:id', loadComponent: () => import('./components/details/emergencydetails/emergencydetails.component').then((m)=> m.EmergencydetailsComponent), title:'Emergency Details'},
      {path:'tickets' , loadComponent: () => import('./components/tickets/tickets.component').then((m)=> m.TicketsComponent), title:'Tickets'},
      {path:'hospital' , loadComponent: () => import('./components/hospital/hospital.component').then((m)=> m.HospitalComponent), title:'Hospital'},
      {path:'hospitaldetails/:id', loadComponent: () => import('./components/details/hospital-details/hospital-details.component').then((m)=>m.HospitalDetailsComponent), title:'Hospitald Details'},
      {path:'hospital-details/:id', loadComponent: () => import('./components/details/hospitaldetails/hospitaldetails.component').then((m)=>m.HospitaldetailsComponent), title:'Hospitald Details'},
      {path:'blog', loadComponent: ()=> import('./components/blog/blog.component').then((m)=>m.BlogComponent), title:'Blog'},
      {path:'blogdetails/:id', loadComponent: () => import('./components/details/blogdetails/blogdetails.component').then((m) => m.BlogdetailsComponent), title:'Blog Details'},
      {path:'blog-details/:id', loadComponent: () => import('./components/details/blog-details/blog-details.component').then((m) => m.BlogDetailsComponent), title:'Blog Details'},
      {path:'insight', loadComponent: () => import('./components/insight/insight.component').then((m)=>m.InsightComponent) , title:'Insight'},
      {path:'insightdetails/:id', loadComponent: () => import('./components/details/insightdetails/insightdetails.component').then((m)=> m.InsightdetailsComponent), title:'Insight Details'},
      {path:'insight-details/:id', loadComponent: () => import('./components/details/insight-details/insight-details.component').then((m)=> m.InsightDetailsComponent), title:'Insight Details'},
      {path:'user', loadComponent:()=> import('./components/user/user.component').then((m) => m.UserComponent), title:'User'},
      {path:'updateinformation', loadComponent: ()=> import('./components/updateinformation/updateinformation.component').then((m)=>m.UpdateinformationComponent), title:'Update User'},
      {path:'transfer/:id', loadComponent: ()=> import('./components/transfer-ticket/transfer-ticket.component').then((m)=>m.TransferTicketComponent), title:'Transfer Ticket'},
      {path:'appointment', loadComponent: ()=> import('./components/appointment/appointment.component').then((m)=>m.AppointmentComponent), title:'Schedule Appointment'}
    ]
  },
  {
    path: '', loadComponent: ()=> import('./layout/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
    children:[
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'login', loadComponent: ()=>import('./components/login/login.component').then((m)=> m.LoginComponent), title: 'Login'},
      {path:'register', loadComponent: ()=>import('./components/register/register.component').then((m)=> m.RegisterComponent), title: 'Register'},
      {path:'forgot-password', loadComponent: ()=>import('./components/forget-password/forget-password.component').then((m)=> m.ForgetPasswordComponent), title: 'Forgot Password'},
      {path:'verify-code', loadComponent: ()=>import('./components/verify-code/verify-code.component').then((m)=> m.VerifyCodeComponent), title: 'Verify Code'}
  ]
},
{
  path: '**' , loadComponent: ()=> import('./components/notfound/notfound.component').then((m)=> m.NotfoundComponent) , title:'Page not found'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
