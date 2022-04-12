import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BookHistoryComponent } from './components/book-history/book-history.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: "", component: HomeContainerComponent, children: [
      { path: "book-shelf", component: BookShelfComponent },
      { path: "wishlist", component: WishlistComponent},
      { path: "book-history", component: BookHistoryComponent },
      { path: "contact-us", component: ContactUsComponent },
      { path: "about-us", component: AboutUsComponent },
      { path: "", redirectTo: "book-shelf", pathMatch: "full" },
      { path: "**", redirectTo: "book-shelf", pathMatch: "full" },
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
