import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-grid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  @Input() users:any;
  @Input() colFields:Array<string>;
  @Input() colNames:Array<string>;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

  editUser(user:any){
    this.edit.emit(user);
  }
  
  deleteUser(user){
    this.delete.emit(user);
  }

}
