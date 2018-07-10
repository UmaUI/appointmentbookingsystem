import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableonlineconsultComponent } from './enableonlineconsult.component';

describe('EnableonlineconsultComponent', () => {
  let component: EnableonlineconsultComponent;
  let fixture: ComponentFixture<EnableonlineconsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnableonlineconsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableonlineconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
