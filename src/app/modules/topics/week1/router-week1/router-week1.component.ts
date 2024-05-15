import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-router-week1',
  templateUrl: './router-week1.component.html',
  styleUrl: './router-week1.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RouterWeek1Component {
  isVisible = false;
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
