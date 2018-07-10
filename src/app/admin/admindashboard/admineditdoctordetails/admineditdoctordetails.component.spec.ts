import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctordetailsComponent } from './admineditdoctordetails.component';

describe('AdmineditdoctordetailsComponent', () => {
  let component: AdmineditdoctordetailsComponent;
  let fixture: ComponentFixture<AdmineditdoctordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
