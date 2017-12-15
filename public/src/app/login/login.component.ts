import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //store user name
    private user = {
            name: "",
        }

    private error

  constructor(
      private _router: Router,
      private _userservice: UserService
      
  ) { }

  ngOnInit() {
  }
  //log in user by passing user to the service
  login(){
      this._userservice.login(this.user)
      .then(data => {
          console.log(data);
          this._router.navigateByUrl('/dashboard')
      })
      .catch(err => this.error = err)
  }

}