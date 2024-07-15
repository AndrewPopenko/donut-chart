import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chartData = [
    { name: 'Housing', value: 100, color: '#FF7043', icon: 'assets/icons/housing.png' },
    { name: 'Transport', value: 200, color: '#FFCA28', icon: 'assets/icons/transport.png' },
    { name: 'Food', value: 150, color: '#29B6F6', icon: 'assets/icons/food.png' },
    { name: 'Utilities', value: 50, color: '#66BB6A', icon: 'assets/icons/utilities.png' },
    { name: 'Entertainment', value: 50, color: '#AB47BC', icon: 'assets/icons/entertainment.png' },
    { name: 'Healthcare', value: 30, color: '#8D6E63', icon: 'assets/icons/healthcare.png' },
    { name: 'Shopping', value: 20, color: '#000000', icon: 'assets/icons/shopping.png' },
  ];
}
