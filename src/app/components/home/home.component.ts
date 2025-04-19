import { Component } from '@angular/core';
import { HousingLocationsComponent } from '../housing-locations/housing-locations.component';

@Component({
  selector: 'app-home',
  imports: [HousingLocationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
