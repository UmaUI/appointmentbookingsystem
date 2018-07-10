import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomimgappointmentComponent } from './upcomimgappointment.component';

describe('UpcomimgappointmentComponent', () => {
  let component: UpcomimgappointmentComponent;
  let fixture: ComponentFixture<UpcomimgappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomimgappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomimgappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
