import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctoractiveComponent } from './admineditdoctoractive.component';

describe('AdmineditdoctoractiveComponent', () => {
  let component: AdmineditdoctoractiveComponent;
  let fixture: ComponentFixture<AdmineditdoctoractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctoractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctoractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
