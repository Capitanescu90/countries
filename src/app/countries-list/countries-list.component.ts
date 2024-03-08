import { Component, Input, Signal, inject, signal } from '@angular/core';
import { CountryCardComponent } from './country-card/country-card.component';
import { CommonModule } from '@angular/common';
import { CountriesService } from '../Services/countries.service';
import { Country } from '../Models/countries';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountryCardComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css',
})
export class CountriesListComponent {
  @Input()
  selectedCountry: string = '';
  countriesService = inject(CountriesService);
  countriesList: Country[] = [];
  ngOnInit() {
    this.countriesService.countriesList$.subscribe((res) => {
      this.countriesList = res;
    });
  }
}
