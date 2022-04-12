import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingBannerComponent } from './components/landing-banner/landing-banner.component';
import { LandingPptComponent } from './components/landing-ppt/landing-ppt.component';
import { LandingContainerComponent } from './components/landing-container/landing-container.component';


@NgModule({
  declarations: [
    LandingHeaderComponent,
    LandingFooterComponent,
    LandingBannerComponent,
    LandingPptComponent,
    LandingContainerComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
