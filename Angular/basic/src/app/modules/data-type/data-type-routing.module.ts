import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTypeComponent } from './components/data-type/data-type.component';

const routes: Routes = [
  { path: "", component: DataTypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTypeRoutingModule { }
