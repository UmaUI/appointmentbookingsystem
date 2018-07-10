import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditcustomeraltermobilenoComponent } from './admineditcustomeraltermobileno.component';

describe('AdmineditcustomeraltermobilenoComponent', () => {
  let component: AdmineditcustomeraltermobilenoComponent;
  let fixture: ComponentFixture<AdmineditcustomeraltermobilenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditcustomeraltermobilenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditcustomeraltermobilenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
