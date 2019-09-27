import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


let routes = [
  {path:"",component:MainComponent}
]


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHcC0onqGkFF2h2_SgHoNibtKS_EpTbBU'
    })
    
  ]
})
export class DashboardModule { }
