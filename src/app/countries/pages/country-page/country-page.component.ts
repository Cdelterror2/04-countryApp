import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private countriesService: CountriesService,
    //primero va un nombre x y después el del servicio o ?
  ){ }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id)),
    )
    .subscribe( country => {

      if (!country){
        return this.router.navigateByUrl('');
      }
      console.log('Tenemos un país');
      return;
      });
  }

  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(
  //     ({id}) => {

  //       this.countriesService.searchCountryByAlphaCode(id).subscribe(
  //         country => {
  //           console.log({country})

  //         });
  //       //no entendí el id
  //     });
  // }
}
