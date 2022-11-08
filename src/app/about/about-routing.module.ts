import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from '../layout/public-layout/public-layout.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: 'about',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
