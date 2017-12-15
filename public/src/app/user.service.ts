import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(
      private _http: Http
  ) { }

  //logs user in
  login(user){
      return this._http.post('/api/users', user)
      .map((response: Response) => response.json())
      .toPromise();
  }

  //gets user name by id
  getID(){
      return this._http.get('/api/users/new')
      .map((response: Response) => response.json())
      .toPromise();
  }

  //logs out user
  logout(){
      return this._http.get('/api/users/logout')
      .map((response: Response) => response.json())
      .toPromise();
  }


}
