import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isMetric =true
  toggleMetric() {
    this.isMetric = !this.isMetric;
  }

  metricStyle = {
    'background-color': 'lightblue',
    'color': 'black'
  };

  imperialStyle = {
    'background-color': 'lightgreen',
    'color': 'white'
  };
}
