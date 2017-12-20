import { Injectable, NgModule } from '@angular/core';
import { ListModel } from './list.model';
// import { RequestService } from '../services/request.service';

@NgModule({
    imports: [],
    providers: [/*RequestService*/]
  })
export class ListService {
    constructor(/*private requestService: RequestService*/) { }
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
    loadList (type): Promise<ListModel> {
        // let list: ListModel;
        // Do something
        // switch (type) {
        //     case this.requests.USERS:
        //     break;
        //     case this.requests.LISTING:
        //     break;
        //     default:
        //         console.log('loadList function could not find list type ', type);
        // }
        return new Promise((resolve, reject) => {
            // Call backend with type
            // this.requestService.makeGetRequest(
            //     {
            //         user_id: '',
            //         type_of_req: type,
            //         req_options: '',
            //         company: ''
            //     },
            //     (data) => {
            //         list = this._createListObject([], []);
            //         resolve(list);
            //     },
            //     (err) => {
            //         console.error(err);
            //         reject(err);
            //     },
            //     '/test-list.json'
            // );
        });
    }

    /**
     * @function getList
     * @param type RequestType
     * @description Gets a list already loaded,
     * else request list from the backend.
     * @returns {Promise<any>}
     */
    getList (type) {
        if (type === 'dummy') {
            return this._createListObject([1, 2, 3, 4, 5], [1, 2, 3, 4]).getRaw();
        }
        return new Promise((resolve, reject) => {
            if (this.IsListPopulated(type)) {
                resolve(this.lists[type]);
            } else {
                const list = this.loadList(type);
                resolve(list);
            }
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

    // Internal functions

    /**
     * @function _createListObject
     * @param data
     * @param attrs
     */
    _createListObject (data: Array<any>, attrs: Array<any>): ListModel {
        /**
         * Explected
         * {
         *  data : [{id:string, * }]
         * }
         */
        const list = new ListModel([], null, '');
        for (const item of data) {
            list.addListItem(
                item.id,
                item,
                console.log,
                item.id
            );
        }
        return list;
    }
}
