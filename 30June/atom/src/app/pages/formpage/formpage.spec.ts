import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formpage } from './formpage';

describe('Formpage', () => {
  let component: Formpage;
  let fixture: ComponentFixture<Formpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Formpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
