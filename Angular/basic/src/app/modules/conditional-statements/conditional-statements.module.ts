import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalStatementsRoutingModule } from './conditional-statements-routing.module';
import { ConditionalStatementsComponent } from './components/conditional-statements/conditional-statements.component';


@NgModule({
  declarations: [
    ConditionalStatementsComponent
  ],
  imports: [
    CommonModule,
    ConditionalStatementsRoutingModule
  ]
})
export class ConditionalStatementsModule { }
