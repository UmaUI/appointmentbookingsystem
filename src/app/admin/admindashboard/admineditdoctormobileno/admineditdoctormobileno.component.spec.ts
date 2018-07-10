import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctormobilenoComponent } from './admineditdoctormobileno.component';

describe('AdmineditdoctormobilenoComponent', () => {
  let component: AdmineditdoctormobilenoComponent;
  let fixture: ComponentFixture<AdmineditdoctormobilenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctormobilenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctormobilenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
