import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';

import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import {JobsComponent} from './components/pages/jobs/jobs.component';

import { RoutesConfiguration } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RoutesConfiguration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
