import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormArrayRoutingModule } from './form-array-routing.module';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';


@NgModule({
  declarations: [
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    FormArrayRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormArrayModule { }
