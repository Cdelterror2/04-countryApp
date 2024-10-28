import { Component } from '@angular/core';
import { CountryI } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: CountryI[] = [];
  public isLoading: boolean = false;

  constructor(private CountriesService: CountriesService){

  }

  searchByCountry(term: string): void {

    this.isLoading = true;
    this.CountriesService.searchCountry(term).subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    )
  }
}
