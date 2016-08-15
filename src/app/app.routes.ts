import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { WorkComponent } from './work.component';
import { ResumeComponent } from './resume.component';
import { AboutHomeComponent } from './abouthome.component';
import { ExperienceComponent } from './experience.component';
import { CameraComponent } from './camera.component';
import { HobbiesComponent } from './hobbies.component';
import { ClimbingComponent } from './climbing.component';
import { BikeComponent } from './bike.component';

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
  { path: 'about', component: AboutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AboutHomeComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'hobbies', component: HobbiesComponent },
      { path: 'camera', component: CameraComponent },
      { path: 'climbing', component: ClimbingComponent },
      { path: 'bike', component: BikeComponent }
    ]
  }

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
