import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common'

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
    AboutWebsiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
