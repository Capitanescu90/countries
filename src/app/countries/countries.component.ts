import {
  Component,
  OnInit,
  Signal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CountriesListComponent } from '../countries-list/countries-list.component';
import { CountriesService } from '../Services/countries.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [SearchbarComponent, CountriesListComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent {
  searchedInput: string = '';
  countriesService = inject(CountriesService);
  onSearchedInput(value: string) {
    this.searchedInput = value;
  }
}
