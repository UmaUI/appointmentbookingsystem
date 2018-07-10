import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctorgenderComponent } from './admineditdoctorgender.component';

describe('AdmineditdoctorgenderComponent', () => {
  let component: AdmineditdoctorgenderComponent;
  let fixture: ComponentFixture<AdmineditdoctorgenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctorgenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctorgenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
