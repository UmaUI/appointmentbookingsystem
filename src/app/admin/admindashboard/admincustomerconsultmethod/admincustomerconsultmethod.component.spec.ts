import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerconsultmethodComponent } from './admincustomerconsultmethod.component';

describe('AdmincustomerconsultmethodComponent', () => {
  let component: AdmincustomerconsultmethodComponent;
  let fixture: ComponentFixture<AdmincustomerconsultmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerconsultmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerconsultmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
