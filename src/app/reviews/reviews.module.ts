import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { NewWorldDetailComponent } from './new-world/new-world-detail/new-world-detail.component';


@NgModule({
  declarations: [
    NewWorldDetailComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
