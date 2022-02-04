import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTypeRoutingModule } from './data-type-routing.module';
import { DataTypeComponent } from './components/data-type/data-type.component';


@NgModule({
  declarations: [
    DataTypeComponent
  ],
  imports: [
    CommonModule,
    DataTypeRoutingModule
  ]
})
export class DataTypeModule { }
