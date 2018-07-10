import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerprofileComponent } from './admincustomerprofile.component';

describe('AdmincustomerprofileComponent', () => {
  let component: AdmincustomerprofileComponent;
  let fixture: ComponentFixture<AdmincustomerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
