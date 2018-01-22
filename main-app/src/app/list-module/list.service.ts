import { Injectable, NgModule } from '@angular/core';
// import { ListModel } from './list.model';
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
     */
    loadList (type) {
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
            return this._createListObject([1, 2, 3, 4, 5], [1, 2, 3, 4]);
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
    _createListObject (data: Array<any>, attrs: Array<any>) {
        /**
         * Explected
         * {
         *  data : [{id:string, * }]
         * }
         */
        const testListing = {
            id : 1,
            idSelector : '1',
            imgSrc: 'http://random.cat/i/S3oFb.jpg',
            merchantName : 'CatMerchantAbc',
            merchantId : 'asdnasdas213123',
            userId : 'testUser',
            userFullName : 'john deer',
            description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
            createdDate : '10/12/13',
            venue : '33 Flat st, Flatbushtown, Aokland',
            tags : ['deer', 'deeeer1', 'cow2'],
            socialMediaLinks : '',
            phone : '123456679812',
            email : 'mail@mail.com',
            website : 'www.examplecompanywebsite.com',
            data : {}
        };
        const testListing1 = testListing;
        let testListing2 = testListing;
        let testListing3 = testListing;
        
        testListing1.imgSrc = 'http://random.cat/i/ojfUqsw.jpg';
        testListing2.imgSrc = 'http://random.cat/i/blackmo.jpg';
        testListing3.imgSrc = 'http://random.cat/i/eEcqu.jpg';
        
        const list = [testListing1, testListing2, testListing3];
        // const list = new ListModel([], null, '');
        // for (const item of data) {
        //     list.addListItem(
        //         item.id,
        //         item,
        //         console.log,
        //         item.id
        //     );
        // }
        return list;
    }
}
