import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctorspecialityComponent } from './admineditdoctorspeciality.component';

describe('AdmineditdoctorspecialityComponent', () => {
  let component: AdmineditdoctorspecialityComponent;
  let fixture: ComponentFixture<AdmineditdoctorspecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctorspecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctorspecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
