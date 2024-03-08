import { Component, Input } from '@angular/core';
import { Country } from '../../Models/countries';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css',
})
export class CountryCardComponent {
  constructor(private router: Router) {}
  @Input() country!: Country;
  countryDetails(country: Country) {
    this.router.navigate(['/country-details'], {
      state: { dataCountry: country },
    });
  }
}
