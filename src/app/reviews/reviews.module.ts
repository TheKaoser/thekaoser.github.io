import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { NewWorldComponent } from './new-world/new-world.component';
import { LostArkComponent } from './lost-ark/lost-ark.component';


@NgModule({
  declarations: [
    NewWorldComponent,
    LostArkComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
