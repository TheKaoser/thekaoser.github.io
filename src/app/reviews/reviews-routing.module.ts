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
import { DarkSouls2Component } from './dark-souls2/dark-souls2.component';
import { BdoComponent } from './bdo/bdo.component';
import { BatmanComponent } from './batman/batman.component';
import { BioshockComponent } from './bioshock/bioshock.component';
import { OriComponent } from './ori/ori.component';
import { DestinyComponent } from './destiny/destiny.component';
import { WarzoneComponent } from './warzone/warzone.component';
import { GenshinComponent } from './genshin/genshin.component';
import { FfviiComponent } from './ffvii/ffvii.component';
import { Borderlands2Component } from './borderlands2/borderlands2.component';
import { TheLastOfUs2Component } from './the-last-of-us2/the-last-of-us2.component';
import { ZeldaOcarinaOfTimeComponent } from './zelda-ocarina-of-time/zelda-ocarina-of-time.component';
import { GodOfWarComponent } from './god-of-war/god-of-war.component';
import { IntoTheBreachComponent } from './into-the-breach/into-the-breach.component';
import { NierAutomataComponent } from './nier-automata/nier-automata.component';
import { TheLastOfUsComponent } from './the-last-of-us/the-last-of-us.component';
import { FarCry3Component } from './far-cry3/far-cry3.component';
import { HollowKnightComponent } from './hollow-knight/hollow-knight.component';
import { TheWitcher3Component } from './the-witcher3/the-witcher3.component';
import { TesoComponent } from './teso/teso.component';
import { ZeldaBotwComponent } from './zelda-botw/zelda-botw.component';
import { SekiroComponent } from './sekiro/sekiro.component';
import { SeaOfThievesComponent } from './sea-of-thieves/sea-of-thieves.component';
import { DragonAgeOriginsComponent } from './dragon-age-origins/dragon-age-origins.component';
import { Xcom2Component } from './xcom2/xcom2.component';
import { VampireSurvivorsComponent } from './vampire-survivors/vampire-survivors.component';
import { OuterwildsComponent } from './outerwilds/outerwilds.component';
import { FrostpunkComponent } from './frostpunk/frostpunk.component';
import { Diablo4Component } from './diablo4/diablo4.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent
  },
  {
    path: 'diablo4',
    component: Diablo4Component
  },
  {
    path: 'frostpunk',
    component: FrostpunkComponent
  },
  {
    path: 'outer-wilds',
    component: OuterwildsComponent
  },
  {
    path: 'vampire-survivors',
    component: VampireSurvivorsComponent
  },
  {
    path: 'xcom2',
    component: Xcom2Component
  },
  {
    path: 'dragon-age-origins',
    component: DragonAgeOriginsComponent
  },
  {
    path: 'zelda-ocarina-of-time',
    component: ZeldaOcarinaOfTimeComponent
  },
  {
    path: 'into-the-breach',
    component: IntoTheBreachComponent
  },
  {
    path: 'the-last-of-us2',
    component: TheLastOfUs2Component
  },
  {
    path: 'god-of-war',
    component: GodOfWarComponent
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
  {
    path: 'dark-souls2',
    component: DarkSouls2Component
  },
  {
    path: 'black-desert-online',
    component: BdoComponent
  },
  {
    path: 'batman',
    component: BatmanComponent
  },
  {
    path: 'bioshock',
    component: BioshockComponent
  },
  {
    path: 'ori',
    component: OriComponent
  },
  {
    path: 'destiny',
    component: DestinyComponent
  },
  {
    path: 'warzone',
    component: WarzoneComponent
  },
  {
    path: 'genshin',
    component: GenshinComponent
  },
  {
    path: 'ffvii',
    component: FfviiComponent
  },
  {
    path: 'borderlands2',
    component: Borderlands2Component
  },
  {
    path: 'nier-automata',
    component: NierAutomataComponent
  },
  {
    path: 'the-last-of-us',
    component: TheLastOfUsComponent
  },
  {
    path: 'far-cry3',
    component: FarCry3Component
  },
  {
    path: 'hollow-knight',
    component: HollowKnightComponent
  },
  {
    path: 'the-witcher3',
    component: TheWitcher3Component
  },
  {
    path: 'teso',
    component: TesoComponent
  },
  {
    path: 'zelda-botw',
    component: ZeldaBotwComponent
  },
  {
    path: 'sekiro',
    component: SekiroComponent
  },
  {
    path: 'sea-of-thieves',
    component: SeaOfThievesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
