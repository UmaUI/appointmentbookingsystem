import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomergenderComponent } from './admineditcustomergender.component';

describe('AdmineditcustomergenderComponent', () => {
  let component: AdmineditcustomergenderComponent;
  let fixture: ComponentFixture<AdmineditcustomergenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomergenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomergenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
