import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomerdetailsComponent } from './admineditcustomerdetails.component';

describe('AdmineditcustomerdetailsComponent', () => {
  let component: AdmineditcustomerdetailsComponent;
  let fixture: ComponentFixture<AdmineditcustomerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
