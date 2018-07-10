import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctoremailComponent } from './admineditdoctoremail.component';

describe('AdmineditdoctoremailComponent', () => {
  let component: AdmineditdoctoremailComponent;
  let fixture: ComponentFixture<AdmineditdoctoremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctoremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctoremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
