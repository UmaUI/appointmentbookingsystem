import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctoraltermobilenoComponent } from './admineditdoctoraltermobileno.component';

describe('AdmineditdoctoraltermobilenoComponent', () => {
  let component: AdmineditdoctoraltermobilenoComponent;
  let fixture: ComponentFixture<AdmineditdoctoraltermobilenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctoraltermobilenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctoraltermobilenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
