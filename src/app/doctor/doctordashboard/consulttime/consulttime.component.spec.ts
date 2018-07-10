import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulttimeComponent } from './consulttime.component';

describe('ConsulttimeComponent', () => {
  let component: ConsulttimeComponent;
  let fixture: ComponentFixture<ConsulttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulttimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
