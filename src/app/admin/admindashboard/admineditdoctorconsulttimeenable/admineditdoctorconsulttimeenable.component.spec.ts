import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdoctorconsulttimeenableComponent } from './admineditdoctorconsulttimeenable.component';

describe('AdmineditdoctorconsulttimeenableComponent', () => {
  let component: AdmineditdoctorconsulttimeenableComponent;
  let fixture: ComponentFixture<AdmineditdoctorconsulttimeenableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineditdoctorconsulttimeenableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdoctorconsulttimeenableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
