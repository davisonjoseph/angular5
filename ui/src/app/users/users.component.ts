import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  colNames:Array<string>;
  colFields:Array<string>;
  closeResult: any;
  model:any;
  modalref;
  editMode:boolean;
  id:any;
  config;

  constructor(private userService : UserService,
    private modalService: NgbModal) { }

  ngOnInit() {
    //this.AppComponent.alertme();
    this.config = {"delete":true, "edit":false};
    this.getusers();
  }

  getusers(){
    this.userService.get()
      .subscribe(data => {
        this.users = data;
        this.colFields = ["_id","name"];
        this.colNames = ["id","name"];
      })
  }

  edit(event, content){
    this.model = event;
    this.editMode = true;
    this.id = event._id;
    this.modalref = this.modalService.open(content);
  }

  delete(event){
    this.userService.delete(event).subscribe(res => {
      console.log(res);
      this.getusers();
    },
    err => {
      console.log("Error occured");
    })
  }

  submitUser(form){
    if(form.invalid){
      alert("Invalid Email!");
      return;
    }
    if(this.editMode){
      this.userService.update(form.value, this.id).subscribe(res => {
        this.modalref.close();
        this.getusers();
      },
      err => {
        console.log("Error occured");
      })
    }else{
      this.userService.create(form.value).subscribe(res => {
        this.modalref.close();
        this.getusers();
      },
      err => {
        console.log("Error occured");
      })
    } 
  }

  cancel(){
    this.modalref.dismiss();
  }

  addUser(content){
    this.model = {};
    this.editMode = false;
    this.modalref = this.modalService.open(content);
  }

}
