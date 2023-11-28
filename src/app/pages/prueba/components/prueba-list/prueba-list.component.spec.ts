import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaListComponent } from './prueba-list.component';

describe('PruebaListComponent', () => {
  let component: PruebaListComponent;
  let fixture: ComponentFixture<PruebaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
