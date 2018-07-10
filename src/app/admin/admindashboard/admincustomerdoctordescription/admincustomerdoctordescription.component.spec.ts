import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerdoctordescriptionComponent } from './admincustomerdoctordescription.component';

describe('AdmincustomerdoctordescriptionComponent', () => {
  let component: AdmincustomerdoctordescriptionComponent;
  let fixture: ComponentFixture<AdmincustomerdoctordescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerdoctordescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerdoctordescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
