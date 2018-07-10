import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerupcomimgappointmentsComponent } from './admincustomerupcomimgappointments.component';

describe('AdmincustomerupcomimgappointmentsComponent', () => {
  let component: AdmincustomerupcomimgappointmentsComponent;
  let fixture: ComponentFixture<AdmincustomerupcomimgappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerupcomimgappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerupcomimgappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
