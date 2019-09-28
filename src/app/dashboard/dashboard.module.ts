import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from '../material/material.module';


let routes = [
  {path:"",component:MainComponent}
]


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class DashboardModule { }
