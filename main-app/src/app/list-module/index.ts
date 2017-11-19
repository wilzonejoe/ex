import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ListModel } from './list.model';
import { ListDataItem } from './list-data-item.model';
import { ListComponent } from './list.component';
import { RequestService } from '../services/request.service';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListModel, ListDataItem, RequestService],
  bootstrap: [ListComponent]
})
export class ListModule { }
