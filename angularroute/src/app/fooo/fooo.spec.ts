import { ComponentFixture, TestBed } from '@angular/core/testing';

import { foooo } from './foooo';

describe('foooo', () => {
  let component: foooo;
  let fixture: ComponentFixture<foooo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [foooo],
    }).compileComponents();

    fixture = TestBed.createComponent(foooo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
