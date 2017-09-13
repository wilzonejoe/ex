import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    LoginService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
