import { Component, Inject } from '@angular/core';
import { ListModel } from './list.model';

// List component
@Component({
    selector: 'app-list-mod',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    // Create a general object
    list: ListModel;
    constructor() {}

    init(list: ListModel) {
        this.list = list;
    }

    getList(): ListModel {
        return this.list;
    }
}



