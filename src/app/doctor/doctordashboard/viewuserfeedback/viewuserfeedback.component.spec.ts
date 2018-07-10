import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserfeedbackComponent } from './viewuserfeedback.component';

describe('ViewuserfeedbackComponent', () => {
  let component: ViewuserfeedbackComponent;
  let fixture: ComponentFixture<ViewuserfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
