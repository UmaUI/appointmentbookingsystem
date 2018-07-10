import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerupdatefeedbackratingComponent } from './admincustomerupdatefeedbackrating.component';

describe('AdmincustomerupdatefeedbackratingComponent', () => {
  let component: AdmincustomerupdatefeedbackratingComponent;
  let fixture: ComponentFixture<AdmincustomerupdatefeedbackratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerupdatefeedbackratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerupdatefeedbackratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
