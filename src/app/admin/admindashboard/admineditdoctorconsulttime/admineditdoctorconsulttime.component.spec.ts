import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctorconsulttimeComponent } from './admineditdoctorconsulttime.component';

describe('AdmineditdoctorconsulttimeComponent', () => {
  let component: AdmineditdoctorconsulttimeComponent;
  let fixture: ComponentFixture<AdmineditdoctorconsulttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctorconsulttimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctorconsulttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
