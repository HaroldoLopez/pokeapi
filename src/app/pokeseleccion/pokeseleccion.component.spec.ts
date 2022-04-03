import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeseleccionComponent } from './pokeseleccion.component';

describe('PokeseleccionComponent', () => {
  let component: PokeseleccionComponent;
  let fixture: ComponentFixture<PokeseleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeseleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeseleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
