import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewfeedbacksComponent } from './adminviewfeedbacks.component';

describe('AdminviewfeedbacksComponent', () => {
  let component: AdminviewfeedbacksComponent;
  let fixture: ComponentFixture<AdminviewfeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewfeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
