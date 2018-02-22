import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  user:any;
  model:any;

  constructor(private userService : UserService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getusers();
  }

  getusers(){
    this.userService.get()
      .subscribe(data => {
        this.users = data;
        this.colFields = ["_id","name","controls"];
        this.colNames = ["id","name","Actions"];
      })
  }

  edit(event, content){
    console.log(event);
    this.model = event;
    this.modalService.open(content).result.then((result) => {
      console.log(result);
      this.userService.update(result.value, event._id).subscribe(res => {
        console.log(res);
        this.getusers();
      },
      err => {
        console.log("Error occured");
      })
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  createUser(form){
    this.userService.create(form.value).subscribe(res => {
      console.log(res);
      this.getusers();
    },
    err => {
      console.log("Error occured");
    })
  }

  addUser(content){
    this.model = {};
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.createUser(result)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
