import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorresetpasswordComponent } from './doctorresetpassword.component';

describe('DoctorresetpasswordComponent', () => {
  let component: DoctorresetpasswordComponent;
  let fixture: ComponentFixture<DoctorresetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorresetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
