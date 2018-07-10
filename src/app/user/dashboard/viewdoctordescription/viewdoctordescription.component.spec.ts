import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdoctordescriptionComponent } from './viewdoctordescription.component';

describe('ViewdoctordescriptionComponent', () => {
  let component: ViewdoctordescriptionComponent;
  let fixture: ComponentFixture<ViewdoctordescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdoctordescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdoctordescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
