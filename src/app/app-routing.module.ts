import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartComponent } from './cart/cart.component';
import { AdminregComponent } from './adminreg/adminreg.component';
import { PaymentComponent } from './payment/payment.component';
import { MembershipCardComponent } from './membership-card/membership-card.component';

const routes: Routes = [
 
  {
    path:'',
    component:WelcomeComponent 
  },
  {
    path:'welcome',
    component:WelcomeComponent 
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'membership',
    component:MembershipCardComponent
  },
  {
    path:'adminreg',
    component:AdminregComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
