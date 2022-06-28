import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { NewWorldComponent } from './new-world/new-world.component';
import { LostArkComponent } from './lost-ark/lost-ark.component';
import { RemnantComponent } from './remnant/remnant.component';
import { DishonoredComponent } from './dishonored/dishonored.component';
import { LoopHeroComponent } from './loop-hero/loop-hero.component';
import { FalloutNvComponent } from './fallout-nv/fallout-nv.component';


@NgModule({
  declarations: [
    NewWorldComponent,
    LostArkComponent,
    RemnantComponent,
    DishonoredComponent,
    LoopHeroComponent,
    FalloutNvComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
