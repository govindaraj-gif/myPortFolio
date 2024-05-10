import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'shared/src';
import { FooterComponent } from './portFolio/footer/footer.component';
import { NavbarComponent } from './portFolio/navbar/navbar.component';
import { ProjectsAndAboutComponent } from './portFolio/projects-and-about/projects-and-about.component';
import { SkillsComponent } from './portFolio/skills/skills.component';
import { PortFolioComponent } from './portFolio/portFolio.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProjectsAndAboutComponent,
    SkillsComponent,
    PortFolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
