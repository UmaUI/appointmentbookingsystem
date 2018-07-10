import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctornameComponent } from './admineditdoctorname.component';

describe('AdmineditdoctornameComponent', () => {
  let component: AdmineditdoctornameComponent;
  let fixture: ComponentFixture<AdmineditdoctornameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctornameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctornameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
