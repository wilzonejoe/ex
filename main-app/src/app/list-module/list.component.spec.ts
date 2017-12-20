import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListComponent } from './list.component';
import { ListModel } from './list.model';
// import { ListDataItem } from './list-data-item.model';
import * as jsonSchema from 'json-schema';

// Shared fixture variables in tests
let fixture;
let app;
let validate;

// let listData;

describe('ListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent
      ],
    }).compileComponents();
    // Setup test fixtures
    fixture = TestBed.createComponent(ListComponent);
    app = fixture.debugElement.componentInstance;
    validate = jsonSchema.validate;
    // Test data structures
    // const attribute1 = new ListDataItem('attr1', 1, null, '1');
    // listData = new ListModel([attribute1], null, {data : 1});
  }));

  it('checking validate', async(() => {
      const Person = {
        firstName : 'dan',
        // lastName : 'man'
        age : 12312312323
      };
      const thingSchema = {
        title: 'Person',
        type: 'object',
        required: ['firstName', 'lastName'],
        properties: {
            firstName: {
                type: 'string',
                // enum: ['dann']
            },
            lastName: {
                type: 'string'
            },
            age: {
                description: 'Age in years',
                type: 'integer',
                minimum: 0
                // maximum: 2
            }
        }
      };
      const res = jsonSchema.validate(Person, thingSchema);
      console.log(res);
      expect(res.valid).toBeTruthy();
  }));

  // it('should create the list', async(() => {
  //   expect(fixture).toBeTruthy();
  //   expect(app).toBeTruthy();
  // }));

  // it('should be able to store a list object', async(() => {
  //   app.init(listData);
  //   expect(app.getList()).toBeTruthy();
  // }));

  // it('should be able display list object', async(() => {
  //   app.init(listData);
  //   // Display logic
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.innerHTML).toContain('attr1');
  // }));
});
