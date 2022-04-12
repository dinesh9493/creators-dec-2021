import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "landing", loadChildren: () => import('./modules/landing/landing.module').then((m) => m.LandingModule) },
  { path: "home", loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },

  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "**", redirectTo: "landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
