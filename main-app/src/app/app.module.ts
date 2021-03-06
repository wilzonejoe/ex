import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';

import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import {JobsComponent} from './components/pages/jobs/jobs.component';
import {SignupComponent} from './components/sign-up/signup.component';

import {ContentModule} from './content-view';

// Providers
import { ListModule } from './list-module';

import { RoutesConfiguration } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    JobsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RoutesConfiguration,
    ListModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
