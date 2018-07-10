import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomernameComponent } from './admineditcustomername.component';

describe('AdmineditcustomernameComponent', () => {
  let component: AdmineditcustomernameComponent;
  let fixture: ComponentFixture<AdmineditcustomernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
