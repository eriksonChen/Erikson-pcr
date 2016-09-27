import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { PopupComponent } from './popup/popup.component';
import { HobbiesMenuComponent } from './hobbies-menu/hobbies-menu.component';
import { HobbiesTypeComponent } from './hobbies-type/hobbies-type.component';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCoreModule } from '@angular2-material/core';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { AboutService } from './about.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ExperienceComponent,
    HobbiesComponent,
    PopupComponent,
    HobbiesMenuComponent,
    HobbiesTypeComponent,
    HeaderComponent,
    WorkComponent,
    AboutHomeComponent, 
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    MdCoreModule.forRoot(),
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot()
  ],
  providers: [appRoutingProviders, AboutService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
