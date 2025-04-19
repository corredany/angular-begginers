import { Component, inject} from '@angular/core';
import { HousingLocationsComponent } from '../housing-locations/housing-locations.component';
import { HousingLocations } from '../housing-locations';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList: HousingLocations[] = [];

  housingService:HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  
}
