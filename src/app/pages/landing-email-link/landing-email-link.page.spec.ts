import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEmailLinkPage } from './landing-email-link.page';

describe('LandingEmailLinkPage', () => {
  let component: LandingEmailLinkPage;
  let fixture: ComponentFixture<LandingEmailLinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingEmailLinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingEmailLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
