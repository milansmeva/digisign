import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatListModule, MatMenuModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule } from "@angular/material/"
import { MatToolbarModule } from "@angular/material/toolbar";



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
  imports:[...comps],
  exports: [
    CommonModule,
    ...comps,

  ]
})
export class MaterialModule { }
