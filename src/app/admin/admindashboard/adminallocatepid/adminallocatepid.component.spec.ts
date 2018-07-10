import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallocatepidComponent } from './adminallocatepid.component';

describe('AdminallocatepidComponent', () => {
  let component: AdminallocatepidComponent;
  let fixture: ComponentFixture<AdminallocatepidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminallocatepidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminallocatepidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
