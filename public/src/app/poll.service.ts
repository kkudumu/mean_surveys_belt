import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class PollService {


  constructor(
      private _http: Http
  ) { }

  //create poll
  create(poll){
      return this._http.post('/api/polls', poll)
      .map((response: Response) => response.json())
      .toPromise()
  }

  //display poll
  displayPolls(){
      return this._http.get('/api/polls')
      .map((response: Response) => response.json())
      .toPromise();
  }

  //delete poll by id
  deletePoll(id){
      return this._http.delete(`/api/polls/${id}`)
      .map((response: Response) => response.json())
      .toPromise();
  }

  //get all poll options by poll id
  getPollOptions(id){
     return this._http.get(`/api/options/${id}`)
     .map((response: Response) => response.json())
     .toPromise();
  }

  //grab a poll by id
  getPoll(id){
      return this._http.get(`/api/polls/${id}`)
      .map((response:Response) => response.json())
      .toPromise();
  }

  //tie a vote to option id
  pollVote(id){
      return this._http.put(`/api/options`, id)
      .map((response:Response) => response.json())
      .toPromise();
  }
  //get option by poll id
  getPollOption(id){
      return this._http.get(`/api/options/new/${id}`)
      .map((response: Response) => response.json())
      .toPromise();
  }
 
}
