import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { SkillsComponent } from './home/skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutProjectsComponent } from './projects/about-projects/about-projects.component';
import { TheThreeKingdomsComponent } from './projects/the-three-kingdoms/the-three-kingdoms.component';
import { FantasticWarsComponent } from './projects/fantastic-wars/fantastic-wars.component';
import { SqueenksComponent } from './projects/squeenks/squeenks.component';
import { PlanetFixerComponent } from './projects/planet-fixer/planet-fixer.component';
import { BasicRpgComponent } from './projects/basic-rpg/basic-rpg.component';
import { UflineComponent } from './projects/ufline/ufline.component';
import { TimeKeeperComponent } from './projects/time-keeper/time-keeper.component';
import { SuckedSoulsComponent } from './projects/sucked-souls/sucked-souls.component';
import { NewWorldListComponent } from './reviews/new-world/new-world-list/new-world-list.component';

import { AboutReviewsComponent } from './reviews/about-reviews/about-reviews.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    AboutProjectsComponent,
    TheThreeKingdomsComponent,
    FantasticWarsComponent,
    SqueenksComponent,
    PlanetFixerComponent,
    BasicRpgComponent,
    UflineComponent,
    TimeKeeperComponent,
    SuckedSoulsComponent,
    NewWorldListComponent,
    AboutReviewsComponent,
    ReviewListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
