import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalStatementsComponent } from './components/conditional-statements/conditional-statements.component';

const routes: Routes = [
  { path: '', component: ConditionalStatementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionalStatementsRoutingModule { }
