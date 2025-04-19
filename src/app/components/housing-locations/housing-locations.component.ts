import { Component, HostAttributeToken, Input } from '@angular/core';
import { HousingLocations } from '../housing-locations';

@Component({
  selector: 'app-housing-locations',
  imports: [],
  templateUrl: './housing-locations.component.html',
  styleUrl: './housing-locations.component.css'
})
export class HousingLocationsComponent {

  @Input() housingLocations!: HousingLocations;

}
