import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  constructor(private CountriesService: CountriesService){

  }

  searchByCapital(term: string): void {
    this.CountriesService.searchCapital(term);
  }
}
