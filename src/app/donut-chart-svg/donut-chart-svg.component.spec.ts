import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChartSvgComponent } from './donut-chart-svg.component';

describe('DonutChartSvgComponent', () => {
  let component: DonutChartSvgComponent;
  let fixture: ComponentFixture<DonutChartSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutChartSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutChartSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
