import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { CountryI } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital:   {term: '', countries: []},
    byCountries: {term:'', countries: []},
    byRegion:    {region:'', countries: []},
  }

  constructor(private http: HttpClient) { }

  private getCountriesRequest (url: string): Observable<CountryI[]>{
    return this.http.get<CountryI[]>(url)
    .pipe(
      catchError( () => of([])),
      // delay(2000),
    );
  }

  searchCountryByAlphaCode(code:string): Observable<CountryI | null>{
    return this.http.get<CountryI[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError( () => of(null))
      );
  }

  searchCapital(term: string): Observable<CountryI[]>{
    const url = `${this.apiUrl}/capital/${term} `;
    return this.getCountriesRequest( url );
  }

  searchCountry(term: string): Observable<CountryI[]>{
    const url = `${this.apiUrl}/name/${term} `;
    return this.getCountriesRequest( url );
  }

  searchRegion(region: string): Observable<CountryI[]>{
    const url = `${this.apiUrl}/region/${region} `;
    return this.getCountriesRequest( url );
  }
}
