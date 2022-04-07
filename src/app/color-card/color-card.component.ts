import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css'],
})
export class ColorCardComponent implements OnInit {
  @Input() colors = '';

  @Output() newItemEvent = new EventEmitter<string>();
  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
  constructor() {}

  ngOnInit(): void {}
}
