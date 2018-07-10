import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerbookappointmentComponent } from './admincustomerbookappointment.component';

describe('AdmincustomerbookappointmentComponent', () => {
  let component: AdmincustomerbookappointmentComponent;
  let fixture: ComponentFixture<AdmincustomerbookappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerbookappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerbookappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
