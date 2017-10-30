import { Component, Inject } from '@angular/core';
import { ListObject } from './list.model';

// List component
@Component({
    selector: 'app-list-mod',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    // Create a general object
    listObject: Object;
    constructor() {}

    init(@Inject(ListObject) listObject: ListObject) {
        this.listObject = listObject;
    }
}



