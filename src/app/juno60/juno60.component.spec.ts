import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Juno60Component } from './juno60.component';

describe('Juno60Component', () => {
  let component: Juno60Component;
  let fixture: ComponentFixture<Juno60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Juno60Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Juno60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
