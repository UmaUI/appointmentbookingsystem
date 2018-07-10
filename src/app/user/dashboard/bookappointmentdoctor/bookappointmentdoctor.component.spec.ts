import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappointmentdoctorComponent } from './bookappointmentdoctor.component';

describe('BookappointmentdoctorComponent', () => {
  let component: BookappointmentdoctorComponent;
  let fixture: ComponentFixture<BookappointmentdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookappointmentdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookappointmentdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
