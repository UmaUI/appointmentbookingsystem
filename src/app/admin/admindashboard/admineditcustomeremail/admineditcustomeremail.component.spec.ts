import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomeremailComponent } from './admineditcustomeremail.component';

describe('AdmineditcustomeremailComponent', () => {
  let component: AdmineditcustomeremailComponent;
  let fixture: ComponentFixture<AdmineditcustomeremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomeremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomeremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
