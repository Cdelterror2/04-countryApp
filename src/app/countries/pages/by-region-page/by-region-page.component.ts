import { Component } from '@angular/core';
import { CountryI } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: CountryI[] = [];

  constructor(private CountriesService: CountriesService){

  }

  searchByRegion(region: string): void{
    this.CountriesService.searchRegion(region).subscribe(
      countries => {
        this.countries = countries;
      }
    )
  }
}
