import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../user.service';
import { PollService } from '../../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    private allPolls
    private name
    

  constructor(
      private _pollservice: PollService,
      private _router: Router,
      private _userservice: UserService
  ) { }
 

  //takes function from dashboard so search can work
  @Input() set displayAllPolls(newPolls){
      this.allPolls = newPolls
  }



  ngOnInit() {
      this.getID()
  }
  
  //retrieve user from service
  getID(){
        this._userservice.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.warn(err);
            this._router.navigateByUrl('/')
        })
    }

  //delete poll by id
  deletePoll(id){
      this._pollservice.deletePoll(id)
      .then(data => this._router.navigateByUrl('/create'))
      .catch((err) => console.warn(err))
  }
 
}
