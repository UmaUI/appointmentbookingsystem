import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcustomerslistComponent } from './adminviewcustomerslist.component';

describe('AdminviewcustomerslistComponent', () => {
  let component: AdminviewcustomerslistComponent;
  let fixture: ComponentFixture<AdminviewcustomerslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminviewcustomerslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewcustomerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
