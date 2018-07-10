import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorviewcustomersComponent } from './doctorviewcustomers.component';

describe('DoctorviewcustomersComponent', () => {
  let component: DoctorviewcustomersComponent;
  let fixture: ComponentFixture<DoctorviewcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorviewcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorviewcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
