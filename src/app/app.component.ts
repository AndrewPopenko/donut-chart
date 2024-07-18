import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  defaultData = [
    {name: 'Housing', value: 70, color: '#7B7B7B', icon: 'assets/svg/housing.svg'},
    {name: 'Entertainment', value: 70, color: '#BFBFBF', icon: 'assets/svg/entertainment.svg'},
    {name: 'Education', value: 70, color: '#7B7B7B', icon: 'assets/svg/education.svg'},
    {name: 'Shopping', value: 70, color: '#BFBFBF', icon: 'assets/svg/shopping.svg'},
    {name: 'Healthcare', value: 70, color: '#7B7B7B', icon: 'assets/svg/healthcare.svg'},
    {name: 'Travels', value: 70, color: '#BFBFBF', icon: 'assets/svg/travels.svg'},
    {name: 'Transport', value: 70, color: '#7B7B7B', icon: 'assets/svg/transport.svg'},
    {name: 'Food', value: 70, color: '#BFBFBF', icon: 'assets/svg/food.svg'},
  ];

  chartData = [
    {name: 'Housing', value: 100, color: '#FF5F00', icon: 'assets/svg/housing.svg'},
    {name: 'Entertainment', value: 200, color: '#029EBA', icon: 'assets/svg/entertainment.svg'},
    {name: 'Education', value: 150, color: '#FFB800', icon: 'assets/svg/education.svg'},
    {name: 'Shopping', value: 70, color: '#3C4FF7', icon: 'assets/svg/shopping.svg'},
    {name: 'Healthcare', value: 70, color: '#39DAE0', icon: 'assets/svg/healthcare.svg'},
    {name: 'Travels', value: 70, color: '#7746E0', icon: 'assets/svg/travels.svg'},
    {name: 'Transport', value: 70, color: '#AAA7A2', icon: 'assets/svg/transport.svg'},
    {name: 'Food', value: 70, color: '#DD48B4', icon: 'assets/svg/food.svg'},
  ]

  anotherOneData = [
    {name: 'Shopping', value: 150, color: '#3C4FF7', icon: 'assets/svg/shopping.svg'},
    {name: 'Healthcare', value: 20, color: '#39DAE0', icon: 'assets/svg/healthcare.svg'},
    {name: 'Entertainment', value: 200, color: '#029EBA', icon: 'assets/svg/entertainment.svg'},
    {name: 'Travels', value: 70, color: '#7746E0', icon: 'assets/svg/travels.svg'},
    {name: 'Transport', value: 70, color: '#AAA7A2', icon: 'assets/svg/transport.svg'},
    {name: 'Food', value: 70, color: '#DD48B4', icon: 'assets/svg/food.svg'},
    {name: 'Housing', value: 200, color: '#FF5F00', icon: 'assets/svg/housing.svg'},
    {name: 'Education', value: 150, color: '#FFB800', icon: 'assets/svg/education.svg'},
  ]
}
