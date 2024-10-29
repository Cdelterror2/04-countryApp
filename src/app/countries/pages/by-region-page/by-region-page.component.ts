import { Component } from '@angular/core';
import { CountryI } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: CountryI[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(private CountriesService: CountriesService){

  }

  searchByRegion(region: Region): void{

    this.selectedRegion = region;

    this.isLoading = true;
    this.CountriesService.searchRegion(region).subscribe(
      countries => {
        this.countries = countries;
        this.isLoading = false;
      }
    )
  }
}
