import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerbookappointmentsearchComponent } from './admincustomerbookappointmentsearch.component';

describe('AdmincustomerbookappointmentsearchComponent', () => {
  let component: AdmincustomerbookappointmentsearchComponent;
  let fixture: ComponentFixture<AdmincustomerbookappointmentsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerbookappointmentsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerbookappointmentsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
