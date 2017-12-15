import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private name: String
    private polls: Array<any>
    private deletedPoll
    private displayAllPolls: Array<any>
    private input = {
        key: ""
    }
    

  constructor(
      private _router: Router,
      private _userservice: UserService,
      private _pollservice: PollService
  ) { }

  ngOnInit() {
      this.getID()
      this.showPolls()
  }
 
  //get user by ID from user service
  getID(){
        this._userservice.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/')
        })
    }

    //log user out
    logout() {
        this._userservice.logout()
        .then(data => this._router.navigateByUrl('/'))
        .catch(err => console.warn(err))
    }

    //show all of the polls via poll service, bind to our vars
    showPolls(){
        this._pollservice.displayPolls()
        .then(data => {
            this.polls = data;
            this.displayAllPolls = data;
        })
        .catch(err => console.warn(err))
    }

    //filters all polls when user searches
    searchAllPolls(){
        this.displayAllPolls = this.polls.filter(poll => {
            return poll.question.toLowerCase().includes(this.input.key.toLowerCase())
        })
    }

}
