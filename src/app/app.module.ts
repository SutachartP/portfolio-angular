import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './feature/project/project.component';
import { ContactComponent } from './feature/contact/contact.component';
import { LandingPageComponent } from './feature/landing-page/landing-page.component';
import { TempComponent } from './feature/temp1/temp.component';
import { ExperienceComponent } from './feature/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectComponent,
    ContactComponent,
    TempComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
