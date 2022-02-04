import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariablesRoutingModule } from './variables-routing.module';
import { VariablesComponent } from './components/variables/variables.component';


@NgModule({
  declarations: [
    VariablesComponent
  ],
  imports: [
    CommonModule,
    VariablesRoutingModule
  ]
})
export class VariablesModule { }
