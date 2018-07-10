import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewdoctorslistComponent } from './adminviewdoctorslist.component';

describe('AdminviewdoctorslistComponent', () => {
  let component: AdminviewdoctorslistComponent;
  let fixture: ComponentFixture<AdminviewdoctorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewdoctorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewdoctorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
