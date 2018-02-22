import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { DatagridModule } from '../shared/datagrid/datagrid.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DatagridModule,
    FormsModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }