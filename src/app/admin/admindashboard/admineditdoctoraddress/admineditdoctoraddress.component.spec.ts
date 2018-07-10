import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctoraddressComponent } from './admineditdoctoraddress.component';

describe('AdmineditdoctoraddressComponent', () => {
  let component: AdmineditdoctoraddressComponent;
  let fixture: ComponentFixture<AdmineditdoctoraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctoraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctoraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
