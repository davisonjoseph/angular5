import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  colNames:Array<string>;
  colFields:Array<string>;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
        this.colFields = ["_id","name","controls"];
        this.colNames = ["id","name","Actions"];
      })
  }

  edit(event){
    console.log(event);
  }

  delete(event){
    console.log(event);
  }

}
