import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorretrieveComponent } from './doctorretrieve.component';

describe('DoctorretrieveComponent', () => {
  let component: DoctorretrieveComponent;
  let fixture: ComponentFixture<DoctorretrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorretrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorretrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
