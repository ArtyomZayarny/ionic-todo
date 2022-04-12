import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewtaskPageRoutingModule } from './add-newtask-routing.module';

import { AddNewtaskPage } from './add-newtask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewtaskPageRoutingModule
  ],
  declarations: [AddNewtaskPage]
})
export class AddNewtaskPageModule {}
