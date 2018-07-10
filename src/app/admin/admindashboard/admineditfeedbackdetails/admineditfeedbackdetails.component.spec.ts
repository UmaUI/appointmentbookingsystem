import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditfeedbackdetailsComponent } from './admineditfeedbackdetails.component';

describe('AdmineditfeedbackdetailsComponent', () => {
  let component: AdmineditfeedbackdetailsComponent;
  let fixture: ComponentFixture<AdmineditfeedbackdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditfeedbackdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditfeedbackdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
