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
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';

import { AboutReviewsComponent } from './reviews/about-reviews/about-reviews.component';
import { ReviewsComponent } from './reviews/review-list.component';
import { AboutWebsiteComponent } from './home/about-website/about-website.component';

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
    ProjectListComponent,
    ReviewListComponent,
    AboutReviewsComponent,
    ReviewsComponent,
    AboutWebsiteComponent,
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
