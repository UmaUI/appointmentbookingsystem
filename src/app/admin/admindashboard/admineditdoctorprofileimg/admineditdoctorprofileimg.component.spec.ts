import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctorprofileimgComponent } from './admineditdoctorprofileimg.component';

describe('AdmineditdoctorprofileimgComponent', () => {
  let component: AdmineditdoctorprofileimgComponent;
  let fixture: ComponentFixture<AdmineditdoctorprofileimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctorprofileimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctorprofileimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
