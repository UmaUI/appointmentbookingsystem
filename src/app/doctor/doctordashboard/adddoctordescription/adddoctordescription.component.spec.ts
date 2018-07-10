import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddoctordescriptionComponent } from './adddoctordescription.component';

describe('AdddoctordescriptionComponent', () => {
  let component: AdddoctordescriptionComponent;
  let fixture: ComponentFixture<AdddoctordescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddoctordescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddoctordescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
