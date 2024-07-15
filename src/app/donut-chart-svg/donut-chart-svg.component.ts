import { Component, Input } from '@angular/core';

export interface ChartData {
  name: string;
  value: number;
  color: string;
  icon?: string;
}

@Component({
  selector: 'app-donut-chart-svg',
  templateUrl: './donut-chart-svg.component.html',
  styleUrls: ['./donut-chart-svg.component.scss'],
})
export class DonutChartSvgComponent {
  @Input() data: ChartData[] = [];
  total = 0;
  circumference = 2 * Math.PI * 70; // for a radius of 70

  ngOnChanges() {
    this.total = this.data.reduce((sum, item) => sum + item.value, 0);
  }

  getOffset(index: number): number {
    return (
      (this.data.slice(0, index).reduce((sum, item) => sum + item.value, 0) /
        this.total) *
      this.circumference
    );
  }

  getSegmentStyle(index: number, item: { value: number; color: string }) {
    const offset = this.getOffset(index);
    const dashArray = `${(item.value / this.total) * this.circumference} ${
      this.circumference
    }`;
    return {
      stroke: item.color,
      strokeDasharray: dashArray,
      strokeDashoffset: offset,
    };
  }

  getLabelTransform(index: number): string {
    const segmentAngle = (this.data[index].value / this.total) * 360;
    const startAngle = (this.getOffset(index) / this.circumference) * 360;
    const middleAngle = startAngle + segmentAngle / 2;
    const x = 100 + 75 * Math.cos(((middleAngle - 90) * Math.PI) / 180);
    const y = 100 + 75 * Math.sin(((middleAngle - 90) * Math.PI) / 180);
    return `translate(${x}, ${y})`; // Adjusting to center the icon
  }
}
