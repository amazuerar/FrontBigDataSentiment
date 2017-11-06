import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoSeguidoresComponent } from './historico-seguidores.component';

describe('HistoricoSeguidoresComponent', () => {
  let component: HistoricoSeguidoresComponent;
  let fixture: ComponentFixture<HistoricoSeguidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoSeguidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
