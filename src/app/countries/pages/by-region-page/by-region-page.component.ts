import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { CountryI } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries: CountryI[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(private CountriesService: CountriesService){

  }
  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region;
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
