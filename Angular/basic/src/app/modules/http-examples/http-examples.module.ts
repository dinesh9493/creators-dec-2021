import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { HttpExamplesRoutingModule } from './http-examples-routing.module';
import { HttpExampleComponent } from './components/http-example/http-example.component';


@NgModule({
  declarations: [
    HttpExampleComponent
  ],
  imports: [
    CommonModule,
    HttpExamplesRoutingModule,
    HttpClientModule
  ]
})
export class HttpExamplesModule { }
