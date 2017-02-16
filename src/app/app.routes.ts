import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/';
import { AboutHomeComponent } from './about-home/about-home.component';
import { ExperienceComponent } from './experience/experience.component';
import { HobbiesTypeComponent } from './hobbies-type/';
import { ResumeComponent } from './resume/resume.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: HomeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'about', 
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AboutHomeComponent, data: { title: "about-home" } },
      { path: 'resume', component: ResumeComponent, data: { title: "resume" } },
      { path: 'experience', component: ExperienceComponent, data: { title: "experience" } },
      { path: 'hobbies', component: HobbiesComponent, data: { title: "hobbies" } },
      { path: 'camera', component: HobbiesTypeComponent, data: { item: 'camera' } },
      { path: 'climbing', component: HobbiesTypeComponent, data: { item: 'climbing' } },
      { path: 'bike', component: HobbiesTypeComponent, data: { item: 'bike' } }
    ]
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: '**',
    component: HomeComponent
  }

];

// export const appRoutingProviders: any[] = [

// ];

// export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


