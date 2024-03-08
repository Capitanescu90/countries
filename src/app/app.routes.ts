import { Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesComponent } from './countries/countries.component';

export const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'country-details', component: CountryDetailsComponent },
];
