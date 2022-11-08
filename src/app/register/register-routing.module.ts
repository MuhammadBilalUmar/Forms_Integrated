import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from '../layout/public-layout/public-layout.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: 'register',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
