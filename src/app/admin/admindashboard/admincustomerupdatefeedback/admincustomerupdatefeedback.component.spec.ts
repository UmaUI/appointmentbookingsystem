import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerupdatefeedbackComponent } from './admincustomerupdatefeedback.component';

describe('AdmincustomerupdatefeedbackComponent', () => {
  let component: AdmincustomerupdatefeedbackComponent;
  let fixture: ComponentFixture<AdmincustomerupdatefeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerupdatefeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerupdatefeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
