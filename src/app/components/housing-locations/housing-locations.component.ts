import { Component, HostAttributeToken, Input } from '@angular/core';
import { HousingLocations } from '../housing-locations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-locations',
  imports: [RouterModule],
  templateUrl: './housing-locations.component.html',
  styleUrl: './housing-locations.component.css'
})
export class HousingLocationsComponent {

  @Input() housingLocations!: HousingLocations;

}
