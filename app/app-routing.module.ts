import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
