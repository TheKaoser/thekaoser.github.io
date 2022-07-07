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
import { RedDeadRedemptionComponent } from './red-dead-redemption/red-dead-redemption.component';
import { NierReplicantComponent } from './nier-replicant/nier-replicant.component';
import { GrisComponent } from './gris/gris.component';
import { AssassinsCreed2Component } from './assassins-creed2/assassins-creed2.component';
import { HorizonZeroDawnComponent } from './horizon-zero-dawn/horizon-zero-dawn.component';
import { DarksidersGenesisComponent } from './darksiders-genesis/darksiders-genesis.component';
import { MetalGearSolid3Component } from './metal-gear-solid3/metal-gear-solid3.component';
import { Starcraft2Component } from './starcraft2/starcraft2.component';
import { PokemonZafiroComponent } from './pokemon-zafiro/pokemon-zafiro.component';
import { DoomComponent } from './doom/doom.component';
import { DarkestDungeonComponent } from './darkest-dungeon/darkest-dungeon.component';
import { Cyberpunk2077Component } from './cyberpunk2077/cyberpunk2077.component';
import { CupheadComponent } from './cuphead/cuphead.component';

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
  {
    path: 'red-dead-redemption',
    component: RedDeadRedemptionComponent
  },
  {
    path: 'nier-replicant',
    component: NierReplicantComponent
  },
  {
    path: 'gris',
    component: GrisComponent
  },
  {
    path: 'assassins-creed2',
    component: AssassinsCreed2Component
  },
  {
    path: 'horizon-zero-dawn',
    component: HorizonZeroDawnComponent
  },
  {
    path: 'darksiders-genesis',
    component: DarksidersGenesisComponent
  },
  {
    path: 'metal-gear-solid3',
    component: MetalGearSolid3Component
  },
  {
    path: 'starcraft2',
    component: Starcraft2Component
  },
  {
    path: 'pokemon-zafiro',
    component: PokemonZafiroComponent
  },
  {
    path: 'doom',
    component: DoomComponent
  },
  {
    path: 'darkest-dungeon',
    component: DarkestDungeonComponent
  },
  {
    path: 'cyberpunk2077',
    component: Cyberpunk2077Component
  },
  {
    path: 'cuphead',
    component: CupheadComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
