import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeSideNavComponent } from './components/home-side-nav/home-side-nav.component';
import { HomeTitleBarComponent } from './components/home-title-bar/home-title-bar.component';
import { BookShelfComponent } from './components/book-shelf/book-shelf.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookHistoryComponent } from './components/book-history/book-history.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeHeaderComponent,
    HomeSideNavComponent,
    HomeTitleBarComponent,
    BookShelfComponent,
    WishlistComponent,
    BookHistoryComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
