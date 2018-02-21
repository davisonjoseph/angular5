import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { DatagridModule } from '../shared/datagrid/datagrid.module';

@NgModule({
  imports: [
    CommonModule,
    DatagridModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }