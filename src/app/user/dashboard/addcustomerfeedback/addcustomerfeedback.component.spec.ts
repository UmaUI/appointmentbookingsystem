import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomerfeedbackComponent } from './addcustomerfeedback.component';

describe('AddcustomerfeedbackComponent', () => {
  let component: AddcustomerfeedbackComponent;
  let fixture: ComponentFixture<AddcustomerfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustomerfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomerfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
