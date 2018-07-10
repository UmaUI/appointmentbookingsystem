import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresetpasswordComponent } from './adminresetpassword.component';

describe('AdminresetpasswordComponent', () => {
  let component: AdminresetpasswordComponent;
  let fixture: ComponentFixture<AdminresetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminresetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
