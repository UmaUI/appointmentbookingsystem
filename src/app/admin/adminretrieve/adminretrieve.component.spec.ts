import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminretrieveComponent } from './adminretrieve.component';

describe('AdminretrieveComponent', () => {
  let component: AdminretrieveComponent;
  let fixture: ComponentFixture<AdminretrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminretrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminretrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
