import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
})
export class ColorsComponent {
  colors = ['green', 'yellow', 'red', 'pink'];

  changeColor() {
    this.colors.unshift(...this.colors.splice(this.colors.length - 1, 1));
  }
  items: Array<string>;

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() {
    this.items = [];
  }

  ngOnInit() {}
}
