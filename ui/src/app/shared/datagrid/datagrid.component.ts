import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-grid',
  template: `<table>
                <thead>
                  <tr>
                    <th *ngFor="let colName of colNames">{{colName}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let user of users">
                      <td *ngFor="let colField of colFields">
                        <span>{{user[colField]}}</span>
                        <span *ngIf="colField=='controls'">
                          <button (click)="editUser(user)">Edit</button>
                          <button (click)="deleteUser(user)">Delete</button>
                        </span>
                      </td>
                  </tr>
                </tbody>
            </table>`,
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
