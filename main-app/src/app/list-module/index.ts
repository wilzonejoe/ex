import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ListObject } from './list.model';
import { ListAttribute } from './list-attribute.model';
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListObject, ListAttribute],
  bootstrap: [ListComponent]
})
export class ListModule { }
