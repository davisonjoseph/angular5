import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../app.config';

@Injectable()
export class UserService {
  config = new Config();
  private baseUrl:string = this.config.baseUrl;
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get(this.baseUrl + "users/get");
  }

  create(data){
    return this.http.post(this.baseUrl + "users/create",data);
  }

  update(data, condition){
    return this.http.put(this.baseUrl + "users/update",{data:data,id:condition});
  }

  delete(data){
    return this.http.delete(this.baseUrl + "users/delete/"+data._id);
  }

}
