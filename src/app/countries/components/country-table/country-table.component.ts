import { Component, Input } from '@angular/core';
import { CountryI } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  @Input('countriesChild')
  public countries: CountryI[] = [];
}
