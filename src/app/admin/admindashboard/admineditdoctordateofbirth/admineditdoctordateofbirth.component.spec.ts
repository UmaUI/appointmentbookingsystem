import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctordateofbirthComponent } from './admineditdoctordateofbirth.component';

describe('AdmineditdoctordateofbirthComponent', () => {
  let component: AdmineditdoctordateofbirthComponent;
  let fixture: ComponentFixture<AdmineditdoctordateofbirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctordateofbirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctordateofbirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
