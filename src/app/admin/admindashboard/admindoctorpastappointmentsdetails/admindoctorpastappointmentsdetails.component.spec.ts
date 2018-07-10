import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctorpastappointmentsdetailsComponent } from './admindoctorpastappointmentsdetails.component';

describe('AdmindoctorpastappointmentsdetailsComponent', () => {
  let component: AdmindoctorpastappointmentsdetailsComponent;
  let fixture: ComponentFixture<AdmindoctorpastappointmentsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindoctorpastappointmentsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindoctorpastappointmentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
