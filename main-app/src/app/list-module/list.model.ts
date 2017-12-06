import * as _ from 'lodash';
import { ListDataItem } from './list-data-item.model';
import { Injectable, Inject } from '@angular/core';

// List object
@Injectable()
export class ListModel {
    listDataItem: Array<ListDataItem>;
    onClickCB: Function;
    data;
    constructor(listDataItem: Array<ListDataItem>, onClickCB: Function, data) {
        this.listDataItem = listDataItem;
        this.onClickCB = onClickCB;
        this.data = data;
    }

    /* Attribute Functions */
    /**
     * @function addListItem
     */
    addListItem(key: String, value, cb: Function, idSelector: String): void {
        // Construct attr object and push it into the array
        const attribute = new ListDataItem(key, value, cb, idSelector);
        this.listDataItem.push(attribute);
    }
    removeListItem(key, value): void {
        // Remove according to the list
        _.remove(this.listDataItem, (item) => {
            return item[key] === value;
        });
    }
    updateListItem(iKey, iValue, newAttrObj: ListDataItem): void {
        // Update
        const attrIndexObj = {};
        attrIndexObj[iKey] = iValue;
        const index = _.findIndex(this.listDataItem, attrIndexObj);
        // Replace item at index using native splice
        this.listDataItem.splice(index, 1, newAttrObj);
    }
    getListItem(iKey, iValue): Array<ListDataItem> {
        // Get attr object by key and value
        const returnItems = [];
        _.forEach(this.listDataItem, element => {
            if (element) {
                returnItems.push(element);
            }
        });
        return returnItems;
    }
    getListItems(): Array<ListDataItem> {
        // Get all
        return this.listDataItem;
    }
    getRaw() {
        return JSON.parse(JSON.stringify(this.listDataItem));
    }
}
