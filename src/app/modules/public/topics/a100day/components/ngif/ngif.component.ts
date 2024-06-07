import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss',
})
export class NgifComponent {
  name = 'Angular' + VERSION.major;
  show = false;

  user = {
    name: 'VINCENT',
    age: 19,
  };
}
