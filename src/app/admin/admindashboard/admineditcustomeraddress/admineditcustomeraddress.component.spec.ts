import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomeraddressComponent } from './admineditcustomeraddress.component';

describe('AdmineditcustomeraddressComponent', () => {
  let component: AdmineditcustomeraddressComponent;
  let fixture: ComponentFixture<AdmineditcustomeraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomeraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomeraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
