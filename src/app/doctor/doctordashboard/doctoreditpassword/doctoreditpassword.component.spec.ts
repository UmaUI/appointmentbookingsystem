import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoreditpasswordComponent } from './doctoreditpassword.component';

describe('DoctoreditpasswordComponent', () => {
  let component: DoctoreditpasswordComponent;
  let fixture: ComponentFixture<DoctoreditpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoreditpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoreditpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
