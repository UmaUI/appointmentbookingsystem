import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupcomingappointmentsdetailsComponent } from './adminupcomingappointmentsdetails.component';

describe('AdminupcomingappointmentsdetailsComponent', () => {
  let component: AdminupcomingappointmentsdetailsComponent;
  let fixture: ComponentFixture<AdminupcomingappointmentsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminupcomingappointmentsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupcomingappointmentsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
