import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { NewWorldDetailComponent } from './new-world/new-world-detail/new-world-detail.component';
import { LostArkListComponent } from './lost-ark/lost-ark-list/lost-ark-list.component';
import { LostArkDetailComponent } from './lost-ark/lost-ark-detail/lost-ark-detail.component';


@NgModule({
  declarations: [
    NewWorldDetailComponent,
    LostArkDetailComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
