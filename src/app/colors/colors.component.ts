import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent {
  selectColor() {
    let colors = ['green', 'yellow', 'red'];
    let circle = document.querySelectorAll('div');
    circle.forEach((item, index) => {
      item.style.backgroundColor = colors[index];
    });
  }

  changeColor() {
    let circle = document.querySelectorAll('div');
    let button = document.querySelector('#btn');
    let colors = ['green', 'yellow', 'red'];

    if (button) {
      button.addEventListener('click', function () {
        circle.forEach((item, index) => {
          item.style.backgroundColor = colors[index];
        });
        colors.unshift(colors.splice(colors.length - 1, 1)[0]);
      });
    }
  }

  constructor() {}

  ngOnInit() {
    this.selectColor();
    this.changeColor();
  }
}
