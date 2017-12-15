import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PollService } from '../poll.service';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {

    private name
    private pollOptions
    private pollID
    private poll: Object
    private subscription
    private voteOption


  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _pollservice: PollService,
      private _userservice: UserService
  ) { }
   
//on load, grab ID, get poll options with poll add id to pollID var
  ngOnInit() {
      this.getID()
      this.subscription = this._route.paramMap
      .switchMap(params => this.pollID = params.get('id'))
      .subscribe()
      this.getPollOptions()
      this.getPoll()
  }


  ngOnDestroy(){
      this.subscription.unsubscribe()
  }
 
  //pass poll id to our service. which grabs the poll options
  getPollOptions(){
      this._pollservice.getPollOptions(this.pollID)
      .then(pollOptions => this.pollOptions = pollOptions)
      .catch(err => console.log(err))
  }

  //pass poll id to service to grab poll by poll id
  getPoll(){
      this._pollservice.getPoll(this.pollID)
      .then(poll => this.poll = poll)
      .catch(err => console.warn(err))
  }

  //calls poll vote from service and passes data
  pollVote(){
      this._pollservice.pollVote(this.voteOption)
      .then(data => {
          console.log(data);
          this.getPollOptions()})
      .catch(err => console.warn(err))
  }

  //grab user id from service which is the name of user
  getID(){
        this._userservice.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/');
        })
    }

    //runs our option method on service to grab a poll's option by id
    getPollOption(id){
        this._pollservice.getPollOption(id)
        .then(data => {
            this.voteOption = data;
            return this.pollVote()
        })
        .catch(err => console.log(err))
    }


}
