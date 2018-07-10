import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomerpidComponent } from './admineditcustomerpid.component';

describe('AdmineditcustomerpidComponent', () => {
  let component: AdmineditcustomerpidComponent;
  let fixture: ComponentFixture<AdmineditcustomerpidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomerpidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomerpidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
