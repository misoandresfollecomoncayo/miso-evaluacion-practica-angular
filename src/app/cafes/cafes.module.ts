import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafesListarComponent } from './cafes-listar/cafes-listar.component';

@NgModule({
  declarations: [CafesListarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CafesListarComponent
  ]
})
export class CafesModule { }
