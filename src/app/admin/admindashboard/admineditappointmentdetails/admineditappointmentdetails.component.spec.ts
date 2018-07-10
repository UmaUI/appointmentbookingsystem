import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditappointmentdetailsComponent } from './admineditappointmentdetails.component';

describe('AdmineditappointmentdetailsComponent', () => {
  let component: AdmineditappointmentdetailsComponent;
  let fixture: ComponentFixture<AdmineditappointmentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditappointmentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditappointmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
