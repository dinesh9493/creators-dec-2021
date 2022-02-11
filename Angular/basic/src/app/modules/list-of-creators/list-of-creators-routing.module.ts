import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfCreatorsComponent } from './components/list-of-creators/list-of-creators.component';

const routes: Routes = [
  { path: "", component: ListOfCreatorsComponent },
  { path: "**", component: ListOfCreatorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfCreatorsRoutingModule { }
