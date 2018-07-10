import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerpastappointmentsComponent } from './admincustomerpastappointments.component';

describe('AdmincustomerpastappointmentsComponent', () => {
  let component: AdmincustomerpastappointmentsComponent;
  let fixture: ComponentFixture<AdmincustomerpastappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerpastappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerpastappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
