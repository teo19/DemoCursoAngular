import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeriodicaComponent } from './tabla-periodica.component';

describe('TablaPeriodicaComponent', () => {
  let component: TablaPeriodicaComponent;
  let fixture: ComponentFixture<TablaPeriodicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPeriodicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPeriodicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
