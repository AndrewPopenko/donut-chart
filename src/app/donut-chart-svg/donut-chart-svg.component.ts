import { Component, Input, OnChanges } from '@angular/core';

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
export class DonutChartSvgComponent
  // implements OnChanges
{
  @Input() data: ChartData[] = [];
  @Input() total= 0;
  circumference = 2 * Math.PI * 70; // for a radius of 70

  // ngOnChanges() {
  //   this.total = this.data.reduce((sum, item) => sum + item.value, 0);
  // }

  getOffset(index: number): number {
    return (
      (this.data.slice(0, index).reduce((sum, item) => sum + item.value, 0) /
        this.total) *
      this.circumference
    );
  }

  getSegmentStyle(index: number, item: { value: number; color: string }) {
    const offset = this.getOffset(index);
    console.log('offset', offset)
    const dashArray = `${(item.value / this.total) * this.circumference} ${this.circumference}`;
    console.log('dashArray', dashArray)
    return {
      stroke: item.color,
      strokeDasharray: dashArray,
      strokeDashoffset: offset,
    };
  }

  getLabelTransform(index: number): string {
    const segmentAngle = (this.data[index].value / this.total) * 360;
    console.log(segmentAngle)
    const startAngle = (this.getOffset(index) / this.circumference) * 360;
    const middleAngle = (startAngle + segmentAngle / 2) + 90;
    const x = 100 + 68 * Math.cos((middleAngle - 90) * Math.PI / 180);
    const y = 100 + 68 * Math.sin((middleAngle - 90) * Math.PI / 180);
    return `translate(${x - 12}, ${y - 12})`;
  }

  isSegmentLargeEnough(index: number): boolean {
    const segmentLength = (this.data[index].value / this.total) * this.circumference;
    return segmentLength > 30; // Adjust this threshold as needed
  }
}
