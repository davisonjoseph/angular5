import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../app.config';

@Injectable()
export class UserService {
  config = new Config();
  private baseUrl:string = this.config.baseUrl;
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl + "getusers");
  }

}
