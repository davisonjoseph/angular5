import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { UsersComponent } from '../users/users.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'products', component: ProductsComponent }
];

export const Routing: ModuleWithProviders =  RouterModule.forRoot(routes)
