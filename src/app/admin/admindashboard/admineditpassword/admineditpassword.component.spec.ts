import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditpasswordComponent } from './admineditpassword.component';

describe('AdmineditpasswordComponent', () => {
  let component: AdmineditpasswordComponent;
  let fixture: ComponentFixture<AdmineditpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
