import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerprofileinfoComponent } from './customerprofileinfo.component';

describe('CustomerprofileinfoComponent', () => {
  let component: CustomerprofileinfoComponent;
  let fixture: ComponentFixture<CustomerprofileinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerprofileinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerprofileinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
