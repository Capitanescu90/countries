import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Country } from '../Models/countries';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  http = inject(HttpClient);
  url = 'https://restcountries.com/v3.1';

  countriesList$ = this.http.get<Country[]>(this.url + '/all');
  countries = toSignal<Country[], Country[]>(this.countriesList$, {
    initialValue: [],
  });
}
