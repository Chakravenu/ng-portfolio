import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects' },
    { path: 'resume', component: ResumeComponent, title: 'Resume' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
