import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaRegionalComponent } from './mapa-regional.component';

describe('MapaRegionalComponent', () => {
  let component: MapaRegionalComponent;
  let fixture: ComponentFixture<MapaRegionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaRegionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
