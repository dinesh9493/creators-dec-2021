import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfCreatorsRoutingModule } from './list-of-creators-routing.module';
import { ListOfCreatorsComponent } from './components/list-of-creators/list-of-creators.component';


@NgModule({
  declarations: [
    ListOfCreatorsComponent
  ],
  imports: [
    CommonModule,
    ListOfCreatorsRoutingModule
  ]
})
export class ListOfCreatorsModule { }
