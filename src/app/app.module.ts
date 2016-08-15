import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { AboutComponent } from './about.component';
import { AboutHomeComponent } from './abouthome.component';
import { HomeComponent } from './home.component';
import { WorkComponent } from './work.component';
import { ResumeComponent } from './resume.component';
import { ExperienceComponent } from './experience.component';
import { HobbiesComponent } from './hobbies.component';
import { CameraComponent } from './camera.component';
import { ClimbingComponent } from './climbing.component';
import { BikeComponent } from './bike.component';
import { Http, HTTP_PROVIDERS }from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ResumeComponent,
    AboutHomeComponent,
    ExperienceComponent,
    CameraComponent,
    HobbiesComponent,
    ClimbingComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders, HTTP_PROVIDERS],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
