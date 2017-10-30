import * as _ from 'lodash';
import { ListDataItem } from './list-data-item.model';
import { Injectable, Inject } from '@angular/core';

// List object
@Injectable()
export class ListModel {
    attributes: Array<ListDataItem>;
    onClickCB: Function;
    data;
    constructor(@Inject(ListDataItem) attributes: Array<ListDataItem>, onClickCB: Function, data) {
        this.attributes = attributes;
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
        this.attributes.push(attribute);
    }
    removeListItem(key, value): void {
        // Remove according to the list
        _.remove(this.attributes, (item) => {
            return item[key] === value;
        });
    }
    updateListItem(iKey, iValue, newAttrObj: ListDataItem): void {
        // Update
        const attrIndexObj = {};
        attrIndexObj[iKey] = iValue;
        const index = _.findIndex(this.attributes, attrIndexObj);
        // Replace item at index using native splice
        this.attributes.splice(index, 1, newAttrObj);
    }
    getListItem(iKey, iValue): Array<ListDataItem> {
        // Get attr object by key and value
        const returnItems = [];
        _.forEach(this.attributes, element => {
            if (element) {
                returnItems.push(element);
            }
        });
        return returnItems;
    }
    getListItems(): Array<ListDataItem> {
        // Get all
        return this.attributes;
    }
}
