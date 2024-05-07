import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrl: './day5.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('500ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class Day5Component {
  isVisible = true;

  toggleVisibility(){
    this.isVisible = !this.isVisible;
  }
}
