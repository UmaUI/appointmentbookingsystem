import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomerusernameComponent } from './admineditcustomerusername.component';

describe('AdmineditcustomerusernameComponent', () => {
  let component: AdmineditcustomerusernameComponent;
  let fixture: ComponentFixture<AdmineditcustomerusernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomerusernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomerusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
