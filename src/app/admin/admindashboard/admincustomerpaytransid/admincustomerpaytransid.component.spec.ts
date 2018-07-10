import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerpaytransidComponent } from './admincustomerpaytransid.component';

describe('AdmincustomerpaytransidComponent', () => {
  let component: AdmincustomerpaytransidComponent;
  let fixture: ComponentFixture<AdmincustomerpaytransidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerpaytransidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerpaytransidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
