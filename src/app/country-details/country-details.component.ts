import { Component } from '@angular/core';
import { Country } from '../Models/countries';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css',
})
export class CountryDetailsComponent {
  countryObject!: Country;
  ngOnInit() {
    console.log(history.state.dataCountry);
    this.countryObject = history.state.dataCountry;
  }
}
