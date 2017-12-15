import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    //route for user login
  { path: '', component: LoginComponent },
  
   //route for user dashboard
  { path: 'dashboard', component: DashboardComponent },
 
    //route for creating polls
  { path: 'create', component: CreateComponent },
  
    //route to show a single poll
  { path: 'poll/:id', component: PollComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
