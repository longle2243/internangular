import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() username ="";

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }
}
