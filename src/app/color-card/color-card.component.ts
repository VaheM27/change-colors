import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent implements OnInit {
  @Input() colors='';
  constructor() { }

  ngOnInit(): void {
  }

}
