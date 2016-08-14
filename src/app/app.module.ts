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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    ResumeComponent,
    AboutHomeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
