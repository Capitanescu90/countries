import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  searchedText: string = '';
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  @Output()
  searchedCountryEvent: EventEmitter<string> = new EventEmitter<string>();

  onInputSearchCountry() {
    this.searchedCountryEvent.emit(this.searchedText);
  }
}
