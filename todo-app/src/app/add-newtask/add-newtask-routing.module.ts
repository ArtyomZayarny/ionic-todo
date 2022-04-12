import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewtaskPage } from './add-newtask.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewtaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewtaskPageRoutingModule {}
