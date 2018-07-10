import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewappointmentslistComponent } from './adminviewappointmentslist.component';

describe('AdminviewappointmentslistComponent', () => {
  let component: AdminviewappointmentslistComponent;
  let fixture: ComponentFixture<AdminviewappointmentslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewappointmentslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewappointmentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
