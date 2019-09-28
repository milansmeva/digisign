import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AddmediaComponent } from './addmedia/addmedia.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

let routes = [{
  path:"",
  component:MainComponent
}]


@NgModule({
  declarations: [MainComponent, AddmediaComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule
  ]
})
export class DeviceModule { }
