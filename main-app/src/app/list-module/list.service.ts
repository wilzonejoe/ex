import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
    lists = {};
    selectedList = '';
    requests = { // TODO: could be put into a configuration service, which reads json stored values
        USERS : 'users',
        LISTING : 'listing',
        // add some more after
    };

    /**
     * @function init
     * @param type
     * @description Loads the first list the user is looking
     * at and returns a promise with a list.
     * @returns {Promise<any>}
     */
    init (type): Promise<any> {
        // Setup initial list
        this.lists[type] = this.loadList(type);
        return new Promise((resolve, reject) => {
            resolve(true); // list
        });
    }

    // TODO: load in configuration json from s3 to make sure that
    // the requests made to the back end are to the specific tables
    // and identifiers
    // i.e. add id for back end to know which company instance table to query

    /**
     * @function loadList
     * @param type
     * @description Loads a list from the backend into the local storage.
     * @returns {Promise<any>}
     */
    loadList (type): Promise<any> {
        let list;
        // Do something
        switch (type) {
            case this.requests.USERS:
                // Do something
                list = [];
            break;
            default:
                console.log('loadList function could not find list type ', type);
                // Do something
        }
        return list;
    }

    /**
     * @function getList
     * @param type
     * @description Gets a list already loaded,
     * else request list from the backend.
     * @returns {Promise<any>}
     */
    getList (type): Promise<any> {
        if (this.IsListPopulated(type)) {
            return this.lists[type];
        }
        return new Promise((resolve, reject) => {
            const list = this.loadList(type);
            resolve(list);
          });
    }

    /**
     * @function IsListPopulated
     * @param type
     * @description Called to check if the list exists
     * so that it does not need to be loaded again.
     * @returns {boolean}
     */
    IsListPopulated (type): boolean {
        return (this.lists[type] != null);
    }

    getItem (itemID) {
        // Do something
    }
}
