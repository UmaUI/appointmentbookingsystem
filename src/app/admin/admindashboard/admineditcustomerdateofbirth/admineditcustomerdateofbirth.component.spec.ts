import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomerdateofbirthComponent } from './admineditcustomerdateofbirth.component';

describe('AdmineditcustomerdateofbirthComponent', () => {
  let component: AdmineditcustomerdateofbirthComponent;
  let fixture: ComponentFixture<AdmineditcustomerdateofbirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomerdateofbirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomerdateofbirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
