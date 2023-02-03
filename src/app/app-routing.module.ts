import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { DataAnalysisComponent } from './experience/data-analysis/data-analysis.component';
import { DataScienceComponent } from './experience/data-science/data-science.component';
import { DatabaseComponent } from './experience/database/database.component';
import { WebServiceComponent } from './experience/web-service/web-service.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeLayoutComponent
  },
  {
    path: 'about',
    component: AboutMeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'experience/data-analysis' },
      { path: 'data-analysis', component: DataAnalysisComponent },
      { path: 'data-science', component: DataScienceComponent },
      { path: 'database', component: DatabaseComponent },
      { path: 'web-service', component: WebServiceComponent }
    ]
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
