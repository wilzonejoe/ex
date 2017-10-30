import { Injectable } from '@angular/core';

// Base class attibute class
@Injectable()
export class ListDataItem {
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
