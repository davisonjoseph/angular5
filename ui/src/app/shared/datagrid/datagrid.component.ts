import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'data-grid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
  templ;

  @Input() items:any;
  @Input() field:any;
  @Input() config:any;
  @Input() colFields:Array<string>;
  @Input() colNames:Array<string>;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  editUser(item:any){
    this.edit.emit(item);
  }
  
  deleteUser(item){
    this.delete.emit(item);
  }

}
