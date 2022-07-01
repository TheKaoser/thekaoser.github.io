import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews.component';
import { NewWorldComponent } from './new-world/new-world.component';
import { LostArkComponent } from './lost-ark/lost-ark.component';
import { RemnantComponent } from './remnant/remnant.component';
import { DishonoredComponent } from './dishonored/dishonored.component';
import { LoopHeroComponent } from './loop-hero/loop-hero.component';
import { FalloutNvComponent } from './fallout-nv/fallout-nv.component';
import { HadesComponent } from './hades/hades.component';
import { ResidentEvil2Component } from './resident-evil-2/resident-evil-2.component';
import { ShadowsOfMordorComponent } from './shadows-of-mordor/shadows-of-mordor.component';
import { Divinity2Component } from './divinity2/divinity2.component';
import { TombRaiderComponent } from './tomb-raider/tomb-raider.component';
import { HalfLifeAlyxComponent } from './half-life-alyx/half-life-alyx.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent
  },
  {
    path: 'new-world',
    component: NewWorldComponent
  },
  {
    path: 'lost-ark',
    component: LostArkComponent
  },
  {
    path: 'remnant',
    component: RemnantComponent
  },
  {
    path: 'dishonored',
    component: DishonoredComponent
  },
  {
    path: 'loop-hero',
    component: LoopHeroComponent
  },
  {
    path: 'fallout-nv',
    component: FalloutNvComponent
  },
  {
    path: 'hades',
    component: HadesComponent
  },
  {
    path: 'resident-evil-2',
    component: ResidentEvil2Component
  },
  {
    path: 'shadows-of-mordor',
    component: ShadowsOfMordorComponent
  },
  {
    path: 'divinity2',
    component: Divinity2Component
  },
  {
    path: 'tomb-raider',
    component: TombRaiderComponent
  },
  {
    path: 'half-life-alyx',
    component: HalfLifeAlyxComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
