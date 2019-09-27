import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AddmediaComponent } from './addmedia/addmedia.component';
import { ListComponent } from './list/list.component';

let routes = [{
  path:"",
  component:MainComponent
}]


@NgModule({
  declarations: [MainComponent, AddmediaComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DeviceModule { }
