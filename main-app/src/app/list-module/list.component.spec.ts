import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListComponent } from './list.component';
import { ListModel } from './list.model';
// import { ListDataItem } from './list-data-item.model';
import * as jsonSchema from 'json-schema';

// Shared fixture variables in tests
let fixture;
let app;

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
    // Test data structures
    // const attribute1 = new ListDataItem('attr1', 1, null, '1');
    // listData = new ListModel([attribute1], null, {data : 1});
  }));

  it('checking validate', async(() => {
      const person = {
        //  firstName : 'dan',
        //  lastName : null
      };
      // const person = 'string';
      const personSchema = {
          type: 'object',
          properties: {
              firstName: { type: 'string', required : true},
              lastName: { type: 'string' , required : true},
              age: { type: 'integer', required : true }
          }
      };
      const res = jsonSchema.validate(person, personSchema);
      console.log(res);
      expect(res.valid).toBeFalsy();
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
