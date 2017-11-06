import { Injectable } from '@angular/core';

// Base class attibute class
@Injectable()
export class ListDataItem {
    key: String;
    data; // Can be anything
    onClickCB: Function;
    idSelector: String;
    constructor(key: String, data, onClickCB: Function, idSelector: String) {
        this.key = key;
        this.data = data;
        this.onClickCB = onClickCB;
        this.idSelector = idSelector;
    }
}
