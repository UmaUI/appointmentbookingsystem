import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoreditprofileComponent } from './doctoreditprofile.component';

describe('DoctoreditprofileComponent', () => {
  let component: DoctoreditprofileComponent;
  let fixture: ComponentFixture<DoctoreditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoreditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoreditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
