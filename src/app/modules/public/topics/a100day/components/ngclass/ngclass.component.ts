import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.scss',
})
export class NgclassComponent {
  isdanger = false;
  iswarining = false;
  
  classes= " box red-border blue-background";
}
