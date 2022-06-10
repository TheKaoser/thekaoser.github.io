import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewListComponent } from './review-list/review-list.component';
import { NewWorldDetailComponent } from './new-world/new-world-detail/new-world-detail.component';
import { LostArkDetailComponent } from './lost-ark/lost-ark-detail/lost-ark-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewListComponent
  },
  {
    path: 'new-world',
    component: NewWorldDetailComponent
  },
  {
    path: 'lost-ark',
    component: LostArkDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
