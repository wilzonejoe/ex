import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import {JobsComponent} from './components/pages/jobs/jobs.component';

const routes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'jobs', component: JobsComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class RoutesConfiguration { }
