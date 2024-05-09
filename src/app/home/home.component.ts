import { Component } from '@angular/core';
import { CountryISO, SearchCountryField, PhoneNumberFormat } from 'ngx-intl-tel-input-gg';

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

  CountryISO = CountryISO;
  SearchCountryField = SearchCountryField;
  PhoneNumberFormat = PhoneNumberFormat;
}
