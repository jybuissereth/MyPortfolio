import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { ResumeComponent } from './app/resume/resume.component';
import { ContactComponent } from './app/contact/contact.component';
import { HomeComponent } from './app/home/home.component';


bootstrapApplication(AppComponent,  appConfig)
  .catch((err) => console.error(err));
