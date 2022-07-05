import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
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
import { RedDeadRedemptionComponent } from './red-dead-redemption/red-dead-redemption.component';
import { NierReplicantComponent } from './nier-replicant/nier-replicant.component';
import { GrisComponent } from './gris/gris.component';
import { AssassinsCreed2Component } from './assassins-creed2/assassins-creed2.component';
import { HorizonZeroDawnComponent } from './horizon-zero-dawn/horizon-zero-dawn.component';
import { DarksidersGenesisComponent } from './darksiders-genesis/darksiders-genesis.component';
import { MetalGearSolid3Component } from './metal-gear-solid3/metal-gear-solid3.component';
import { Starcraft2Component } from './starcraft2/starcraft2.component';


@NgModule({
  declarations: [
    NewWorldComponent,
    LostArkComponent,
    RemnantComponent,
    DishonoredComponent,
    LoopHeroComponent,
    FalloutNvComponent,
    HadesComponent,
    ResidentEvil2Component,
    ShadowsOfMordorComponent,
    Divinity2Component,
    TombRaiderComponent,
    HalfLifeAlyxComponent,
    RedDeadRedemptionComponent,
    NierReplicantComponent,
    GrisComponent,
    AssassinsCreed2Component,
    HorizonZeroDawnComponent,
    DarksidersGenesisComponent,
    MetalGearSolid3Component,
    Starcraft2Component
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
