import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "data-type", loadChildren: () => import('./modules/data-type/data-type.module').then(m => m.DataTypeModule) },
  { path: "variables", loadChildren: () => import('./modules/variables/variables.module').then(m => m.VariablesModule) },
  { path: "condtional-statements", loadChildren: () => import('./modules/conditional-statements/conditional-statements.module').then(m => m.ConditionalStatementsModule) },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
