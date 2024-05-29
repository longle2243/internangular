import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addressform',
  templateUrl: './addressform.component.html',
  styleUrl: './addressform.component.scss',
})
export class AddressformComponent {
  @Input() address!: FormGroup;
}
