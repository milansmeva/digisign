import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatListModule, MatMenuModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule } from "@angular/material/"
import { MatToolbarModule } from "@angular/material/toolbar";
import { AgmCoreModule } from '@agm/core';



let comps = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
]


@NgModule({
  imports:[...comps,AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBHcC0onqGkFF2h2_SgHoNibtKS_EpTbBU'
  })
  ],
  exports: [
    CommonModule,
    ...comps,
    AgmCoreModule
  ]
})
export class MaterialModule { }
