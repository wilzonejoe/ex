import * as _ from 'lodash';
import { ListAttribute } from './list-attribute.model';
import { Injectable, Inject } from '@angular/core';

// List object
@Injectable()
export class ListObject {
    attributes: Array<ListAttribute>;
    onClickCB: Function;
    constructor(@Inject(ListAttribute) attributes: Array<ListAttribute>, onClickCB: Function) {
        this.attributes = attributes;
        this.onClickCB = onClickCB;
    }

    /* Attribute Functions */
    /**
     * @function addListItem
     */
    addListItem(key: String, value, cb: Function, idSelector: String): void {
        // Construct attr object and push it into the array
        const attribute = new ListAttribute(key, value, cb, idSelector);
        this.attributes.push(attribute);
    }
    removeListItem(key, value): void {
        // Remove according to the list
        _.remove(this.attributes, (item) => {
            return item[key] === value;
        });
    }
    updateListItem(iKey, iValue, newAttrObj: ListAttribute): void {
        // Update
        const attrIndexObj = {};
        attrIndexObj[iKey] = iValue;
        const index = _.findIndex(this.attributes, attrIndexObj);
        // Replace item at index using native splice
        this.attributes.splice(index, 1, newAttrObj);
    }
    getListItem(iKey, iValue): Array<ListAttribute> {
        // Get attr object by key and value
        const returnItems = [];
        _.forEach(this.attributes, element => {
            if (element) {
                returnItems.push(element);
            }
        });
        return returnItems;
    }
    getListItems(): Array<ListAttribute> {
        // Get all
        return this.attributes;
    }
}
