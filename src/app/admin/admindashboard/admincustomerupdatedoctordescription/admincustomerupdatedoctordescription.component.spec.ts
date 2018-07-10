import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerupdatedoctordescriptionComponent } from './admincustomerupdatedoctordescription.component';

describe('AdmincustomerupdatedoctordescriptionComponent', () => {
  let component: AdmincustomerupdatedoctordescriptionComponent;
  let fixture: ComponentFixture<AdmincustomerupdatedoctordescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerupdatedoctordescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerupdatedoctordescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
