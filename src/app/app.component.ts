import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  chartData = [
    { name: 'Housing', value: 70, color: '#7B7B7B', icon: 'assets/svg/housing.svg' },
    { name: 'Entertainment', value: 70, color: '#BFBFBF', icon: 'assets/svg/entertainment.svg' },
    { name: 'Education', value: 70, color: '#7B7B7B', icon: 'assets/svg/education.svg' },
    { name: 'Shopping', value: 70, color: '#BFBFBF', icon: 'assets/svg/shopping.svg' },
    { name: 'Healthcare', value: 70, color: '#7B7B7B', icon: 'assets/svg/healthcare.svg' },
    { name: 'Travels', value: 70, color: '#BFBFBF', icon: 'assets/svg/travels.svg' },
    { name: 'Transport', value: 70, color: '#7B7B7B', icon: 'assets/svg/transport.svg' },
    { name: 'Food', value: 70, color: '#BFBFBF', icon: 'assets/svg/food.svg' },
  ];

  // chartData = [
  //   { name: 'Housing', value: 70, color: '#FF7043', icon: 'assets/svg/housing.svg' },
  //   { name: 'Entertainment', value: 70, color: '#AB47BC', icon: 'assets/svg/entertainment.svg' },
  //   { name: 'Education', value: 70, color: '#FFCA28', icon: 'assets/svg/education.svg' },
  //   { name: 'Shopping', value: 70, color: '#000000', icon: 'assets/svg/shopping.svg' },
  //   { name: 'Healthcare', value: 70, color: '#8D6E63', icon: 'assets/svg/healthcare.svg' },
  //   { name: 'Travels', value: 70, color: '#29B6F6', icon: 'assets/svg/travels.svg' },
  //   { name: 'Transport', value: 70, color: '#66BB6A', icon: 'assets/svg/transport.svg' },
  //   { name: 'Food', value: 70, color: 'red', icon: 'assets/svg/food.svg' },
  // ];
  // chartData = [
  //   { name: 'Housing', value: 100, color: '#FF7043', icon: 'assets/housing.svg' },
  //   { name: 'Transport', value: 200, color: '#FFCA28', icon: 'assets/2.svg' },
  //   { name: 'Food', value: 150, color: '#29B6F6', icon: 'assets/3.svg' },
  //   { name: 'Utilities', value: 50, color: '#66BB6A', icon: 'assets/4.svg' },
  //   { name: 'Entertainment', value: 50, color: '#AB47BC', icon: 'assets/5.svg' },
  //   { name: 'Healthcare', value: 30, color: '#8D6E63', icon: 'assets/6.svg' },
  //   { name: 'Shopping', value: 20, color: '#000000', icon: 'assets/7.svg' },
  // ];

  total = this.chartData.reduce((sum, item) => sum + item.value, 0);
}
