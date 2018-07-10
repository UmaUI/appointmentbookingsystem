import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomeractiveComponent } from './admineditcustomeractive.component';

describe('AdmineditcustomeractiveComponent', () => {
  let component: AdmineditcustomeractiveComponent;
  let fixture: ComponentFixture<AdmineditcustomeractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomeractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomeractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
