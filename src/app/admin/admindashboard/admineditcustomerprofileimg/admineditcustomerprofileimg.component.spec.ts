import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomerprofileimgComponent } from './admineditcustomerprofileimg.component';

describe('AdmineditcustomerprofileimgComponent', () => {
  let component: AdmineditcustomerprofileimgComponent;
  let fixture: ComponentFixture<AdmineditcustomerprofileimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomerprofileimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomerprofileimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
