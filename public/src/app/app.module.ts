import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { PollComponent } from './poll/poll.component';
import { TableComponent } from './dashboard/table/table.component'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { PollService } from './poll.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateComponent,
    TableComponent,
    PollComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }