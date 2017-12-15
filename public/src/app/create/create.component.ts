import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //new polls have these attributes
  private newPolls = {
      question: "",
      creator: "",
      polloptionone: "",
      polloptiontwo: "",
      polloptionthree: "",
      polloptionfour: "",
  }
  private name: string
 

  constructor(
      private _userservice: UserService,
      private _pollservice: PollService,
      private _router: Router
  ) { }
  
  //get id on page load
  ngOnInit() {
      this.getID()
  }

  //get user id and name from service
  getID(){
      this._userservice.getID()
      .then(data => this.name = data.name)
      .catch(err => {
          console.warn(err);
          this._router.navigateByUrl('/')})
  }
 
  //create a new poll with author name
  create(){
      this.newPolls.creator = this.name;
      this._pollservice.create(this.newPolls)
      .then(data => {
          this._router.navigateByUrl('/dashboard')
      })
      .catch(err => console.warn(err))
  }

}
