import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorviewappointmentsComponent } from './doctorviewappointments.component';

describe('DoctorviewappointmentsComponent', () => {
  let component: DoctorviewappointmentsComponent;
  let fixture: ComponentFixture<DoctorviewappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorviewappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorviewappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
