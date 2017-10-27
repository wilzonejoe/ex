import { Component } from '@angular/core';
import * as _ from 'lodash';

// Base class attibute class
export class Attribute {
    key: String;
    value; // Can be anything
    onClickCB: Function;
    idSelector: String;
    constructor(key: String, value, onClickCB: Function, idSelector: String) {
        this.key = key;
        this.value = value;
        this.onClickCB = onClickCB;
        this.idSelector = idSelector;
    }
}

// List object
export class ListObject {
    attributes: Array<Attribute>;
    onClickCB: Function;
    constructor(attributes: Array<Attribute>, onClickCB: Function) {
        this.attributes = attributes;
        this.onClickCB = onClickCB;
    }

    /* Attribute Functions */
    /**
     * @function addListItem
     */
    addListItem(key: String, value, cb: Function, idSelector: String): void {
        // Construct attr object and push it into the array
        const attribute = new Attribute(key, value, cb, idSelector);
        this.attributes.push(attribute);
    }
    removeListItem(key, value): void {
        // Remove according to the list
        _.remove(this.attributes, (item) => {
            return item[key] === value;
        });
    }
    updateListItem(iKey, iValue, newAttrObj: Attribute): void {
        // Update
        const attrIndexObj = {};
        attrIndexObj[iKey] = iValue;
        const index = _.findIndex(this.attributes, attrIndexObj);
        // Replace item at index using native splice
        this.attributes.splice(index, 1, newAttrObj);
    }
    getListItem(iKey, iValue): Array<Attribute> {
        // Get attr object by key and value
        const returnItems = [];
        _.forEach(this.attributes, element => {
            if (element) {
                returnItems.push(element);
            }
        });
        return returnItems;
    }
    getListItems(): Array<Attribute> {
        // Get all
        return this.attributes;
    }
}

// List component
@Component({
    selector: 'app-list-mod',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    // Create a general object
    listObject: Object;
    constructor(listObject: ListObject) {
        this.listObject = listObject;
    }
}



