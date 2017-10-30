import { TestBed, async } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ListObject } from './list.model';

describe('ListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent
      ],
    }).compileComponents();
  }));

  it('should create the list', async(() => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
