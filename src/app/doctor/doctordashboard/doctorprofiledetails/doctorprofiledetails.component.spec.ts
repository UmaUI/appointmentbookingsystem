import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorprofiledetailsComponent } from './doctorprofiledetails.component';

describe('DoctorprofiledetailsComponent', () => {
  let component: DoctorprofiledetailsComponent;
  let fixture: ComponentFixture<DoctorprofiledetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorprofiledetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorprofiledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
