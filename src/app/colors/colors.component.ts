import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent {
  colors = ['green', 'yellow', 'red'];
  circle: any;
  button: any;

  selectColor() {
    this.circle?.forEach((item: any, index: number) => {
      item.style.backgroundColor = this.colors[index];
    });
  }

  changeColor() {
    this.circle.forEach((item: any, index: number) => {
      item.style.backgroundColor = this.colors[index];
    });
    this.colors.unshift(...this.colors.splice(this.colors.length - 1, 1));
  }

  constructor() {}

  ngOnInit() {
    this.circle = document.querySelectorAll('div');
    this.selectColor();
  }
}
