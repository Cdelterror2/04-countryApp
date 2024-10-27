import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { CountryI } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code:string): Observable<CountryI | null>{
    return this.http.get<CountryI[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError( () => of(null))
      );
  }

  searchCapital(term: string): Observable<CountryI[]>{
    return this.http.get<CountryI[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(
        catchError( () => of([]))
        );
  }

  searchCountry(term: string): Observable<CountryI[]>{
    return this.http.get<CountryI[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      catchError( () => of([]))
    );
  }

  searchRegion(region: string): Observable<CountryI[]>{
    return this.http.get<CountryI[]>(`${this.apiUrl}/region/${region}`)
    .pipe(
      catchError( () => of([]))
    );
  }
}
