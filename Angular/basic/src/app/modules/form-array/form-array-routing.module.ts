import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

const routes: Routes = [
  { path: "", component: PersonalInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormArrayRoutingModule { }
