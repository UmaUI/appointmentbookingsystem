import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerfeedbackuserComponent } from './admincustomerfeedbackuser.component';

describe('AdmincustomerfeedbackuserComponent', () => {
  let component: AdmincustomerfeedbackuserComponent;
  let fixture: ComponentFixture<AdmincustomerfeedbackuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerfeedbackuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerfeedbackuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
