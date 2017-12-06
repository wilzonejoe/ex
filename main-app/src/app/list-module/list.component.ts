import { Component, OnInit } from '@angular/core';
import { ListModel } from './list.model';
import { ListDataItem } from './list-data-item.model';
import { ListService } from './list.service';

// List component
@Component({
    selector: 'app-list-mod',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers: [ListService]
})
export class ListComponent implements OnInit {
    // Create a general object
    list; // ListModel
    listService: ListService;
    constructor(listService: ListService) {
        this.listService = listService;
    }

    ngOnInit() {
        this.list = this.listService.getList('dummy');
        console.log(this.list);
    }

    init(list: ListModel) {
        this.list = list;
    }

    getList(): Array<ListDataItem> {
        return this.list.getListItems() == null ? null : this.list.getListItems();
    }
}
