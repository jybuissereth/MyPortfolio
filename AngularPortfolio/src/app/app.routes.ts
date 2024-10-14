import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./resume/resume.component').then((m) => m.ResumeComponent),
  },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];
