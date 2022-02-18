import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpExampleComponent } from './components/http-example/http-example.component';

const routes: Routes = [
  { path: "", component: HttpExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpExamplesRoutingModule { }
