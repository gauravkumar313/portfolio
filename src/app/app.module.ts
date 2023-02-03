import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataAnalysisComponent } from './experience/data-analysis/data-analysis.component';
import { DataScienceComponent } from './experience/data-science/data-science.component';
import { DatabaseComponent } from './experience/database/database.component';
import { WebServiceComponent } from './experience/web-service/web-service.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeLayoutComponent,
    AboutMeComponent,
    ExperienceComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent,
    DataAnalysisComponent,
    DataScienceComponent,
    DatabaseComponent,
    WebServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatTabsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
