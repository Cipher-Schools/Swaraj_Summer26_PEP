import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accor } from './accor';

describe('Accor', () => {
  let component: Accor;
  let fixture: ComponentFixture<Accor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accor],
    }).compileComponents();

    fixture = TestBed.createComponent(Accor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
