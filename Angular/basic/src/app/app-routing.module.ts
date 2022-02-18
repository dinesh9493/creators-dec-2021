import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "http", loadChildren: () => import('./modules/http-examples/http-examples.module').then(m => m.HttpExamplesModule) },
  { path: "form-array", loadChildren: () => import('./modules/form-array/form-array.module').then(m => m.FormArrayModule) },
  { path: "data-type", loadChildren: () => import('./modules/data-type/data-type.module').then(m => m.DataTypeModule) },
  { path: "variables", loadChildren: () => import('./modules/variables/variables.module').then(m => m.VariablesModule) },
  { path: "condtional-statements", loadChildren: () => import('./modules/conditional-statements/conditional-statements.module').then(m => m.ConditionalStatementsModule) },
  { path: "register", loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  { path: "list-of-creators", loadChildren: () => import('./modules/list-of-creators/list-of-creators.module').then(m => m.ListOfCreatorsModule) },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
