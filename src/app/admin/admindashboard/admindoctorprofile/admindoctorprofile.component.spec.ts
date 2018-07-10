import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindoctorprofileComponent } from './admindoctorprofile.component';

describe('AdmindoctorprofileComponent', () => {
  let component: AdmindoctorprofileComponent;
  let fixture: ComponentFixture<AdmindoctorprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindoctorprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindoctorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
