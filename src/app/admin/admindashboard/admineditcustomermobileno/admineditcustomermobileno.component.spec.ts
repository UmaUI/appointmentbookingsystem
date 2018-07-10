import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomermobilenoComponent } from './admineditcustomermobileno.component';

describe('AdmineditcustomermobilenoComponent', () => {
  let component: AdmineditcustomermobilenoComponent;
  let fixture: ComponentFixture<AdmineditcustomermobilenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomermobilenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomermobilenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
